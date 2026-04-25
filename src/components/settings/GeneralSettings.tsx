// src/components/settings/GeneralSettings.tsx

export default function GeneralSettings() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-6">

      <h2 className="text-lg font-semibold">
        Preferencias del sistema
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <select className="input">
          <option>Modo oscuro</option>
          <option>Modo claro</option>
        </select>

        <select className="input">
          <option>Español</option>
          <option>English</option>
        </select>

        <select className="input col-span-2">
          <option>(GMT-03:00) Buenos Aires</option>
        </select>

      </div>

    </div>
  )
}