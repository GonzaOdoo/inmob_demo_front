// src/components/settings/CompanyForm.tsx

import { useState } from "react"

export default function CompanyForm() {
  const [form, setForm] = useState({
    name: "",
    legalName: "",
    brandName: "",
    cuit: "",
    street: "",
    city: "",
    state: "",
  })

  return (
    <>
      {/* Empresa */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          Información de la empresa
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Nombre de la empresa"
            className="input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Razón social"
            className="input"
            value={form.legalName}
            onChange={(e) => setForm({ ...form, legalName: e.target.value })}
          />

          <input
            placeholder="Nombre comercial"
            className="input"
            value={form.brandName}
            onChange={(e) => setForm({ ...form, brandName: e.target.value })}
          />

          <input
            placeholder="CUIT"
            className="input"
            value={form.cuit}
            onChange={(e) => setForm({ ...form, cuit: e.target.value })}
          />
        </div>
      </div>

      {/* Dirección */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          Dirección y ubicación
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Calle y número"
            className="input col-span-2"
            value={form.street}
            onChange={(e) => setForm({ ...form, street: e.target.value })}
          />

          <input
            placeholder="Ciudad"
            className="input"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />

          <input
            placeholder="Provincia"
            className="input"
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
          />
        </div>
      </div>
    </>
  )
}