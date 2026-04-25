// src/components/layout/Header.tsx
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"

export default function Header() {
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user") || "null")

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // cerrar dropdown al hacer click afuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate({ to: "/login" })
  }

  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background">
      
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
        <Input
          placeholder="Buscar propiedades, clientes..."
          className="pl-9 bg-card border-border"
        />
      </div>

      {/* User */}
      <div className="relative ml-6" ref={dropdownRef}>
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="text-right text-sm">
            <p className="text-white font-medium">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-muted text-xs">
              {user?.role || "Usuario"}
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            {user?.firstName?.[0]}
            {user?.lastName?.[0]}
          </div>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
            
            <button
              onClick={() => {
                navigate({ to: "/settings" })
                setOpen(false)
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-muted/30"
            >
              Configuración
            </button>

            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-muted/30"
            >
              Cerrar sesión
            </button>

          </div>
        )}
      </div>
    </header>
  )
}