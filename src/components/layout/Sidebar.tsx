import { Link, useRouterState } from "@tanstack/react-router"
import {
  LayoutDashboard,
  Building2,
  Users,
  UserSearch,
  Calendar,
  Settings
} from "lucide-react"

const menu = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Propiedades", to: "/properties", icon: Building2 },
  { label: "CRM", to: "/crm", icon: Users },
  { label: "Contactos", to: "/contacts", icon: UserSearch },
  { label: "Agenda", to: "/calendar", icon: Calendar },
]

export default function Sidebar({ children }: { children?: React.ReactNode }) {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  })

  return (
    <aside className="w-64 h-screen bg-card border-r border-border flex flex-col">
      
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="inline-block px-3 py-1 rounded-full bg-tertiary text-primary font-semibold">
          inmob
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-4 overflow-auto">

        {menu.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.to

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                ${isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:bg-muted/10 hover:text-white"}
              `}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          )
        })}
        <span className=" pt-4 text-xs text-muted mt-4 block font-bold">
          FILTROS AVANZADOS
        </span>
        {/* FILTROS */}
        {children && (
          <div className="pt-1">
            {children}
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <Link
          to="/settings"
          className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg text-sm hover:bg-muted/70 transition"
        >
          <Settings className="w-4 h-4" />
          Configuración
        </Link>
      </div>

    </aside>
  )
}