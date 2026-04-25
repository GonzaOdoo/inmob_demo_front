// src/components/settings/UserForm.tsx

export default function UserForm() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-6">

      <h2 className="text-lg font-semibold">Usuario</h2>

      <div className="grid grid-cols-2 gap-4">
        <input className="input" placeholder="Nombre completo" />
        <input className="input" placeholder="Correo electrónico" />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="password"
          className="input flex-1"
          placeholder="Contraseña"
        />
        <button className="px-4 py-2 border border-border rounded-lg text-sm">
          Actualizar
        </button>
      </div>

      <div>
        <p className="text-sm mb-2">Firma de correo</p>
        <textarea
          className="w-full h-28 p-3 bg-background border border-border rounded-md"
          placeholder="Firma..."
        />
      </div>

      <div className="flex items-center justify-between bg-muted/10 p-4 rounded-xl">
        <div>
          <p className="text-sm font-medium">
            Autenticación de dos factores
          </p>
          <p className="text-xs text-muted">
            Añade una capa extra de seguridad
          </p>
        </div>

        <input type="checkbox" />
      </div>

    </div>
  )
}