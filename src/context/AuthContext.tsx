import { createContext, useContext, useState, useEffect } from "react"


type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  role?: string
  permissions?: string[]
}

type Tenant = {
  id: string
  name: string
  slug: string
}

type AuthContextType = {
  token: string | null
  user: User | null
  tenant: Tenant | null
  login: (data: { token: string; user: User; tenant: Tenant }) => void
  logout: () => void
}
const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [tenant, setTenant] = useState<Tenant | null>(null)

  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")
    const storedTenant = localStorage.getItem("tenant")

    if (storedToken) setToken(storedToken)
    if (storedUser) setUser(JSON.parse(storedUser))
    if (storedTenant) setTenant(JSON.parse(storedTenant))
  }, [])

  const login = ({ token, user, tenant }: { token: string; user: User; tenant: Tenant }) => {
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("tenant", JSON.stringify(tenant))

    setToken(token)
    setUser(user)
    setTenant(tenant)
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("tenant")

    setToken(null)
    setUser(null)
    setTenant(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, tenant, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}