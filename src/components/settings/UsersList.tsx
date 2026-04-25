// src/components/settings/UsersList.tsx

export default function UsersList() {
  const users = [
    { id: 1, name: "Carlos Agente", role: "Administrador", active: true },
    { id: 2, name: "Mariana Rossi", role: "Agente", active: true },
    { id: 3, name: "Juan Pérez", role: "Coordinador", active: false },
    { id: 4, name: "Sofía García", role: "Agente", active: true },
  ]

  return (
    <div className="space-y-4">

      <button className="w-full border border-border rounded-xl p-3 text-sm hover:bg-muted/10">
        + Agregar usuario
      </button>

      {users.map((u) => (
        <div
          key={u.id}
          className="p-4 rounded-xl bg-card border border-border flex justify-between items-center hover:bg-muted/10 cursor-pointer"
        >
          <div>
            <p className="font-medium">{u.name}</p>
            <p className="text-xs text-muted">{u.role}</p>
          </div>

          <span className={`text-xs ${
            u.active ? "text-green-400" : "text-red-400"
          }`}>
            {u.active ? "Activo" : "Inactivo"}
          </span>
        </div>
      ))}
    </div>
  )
}