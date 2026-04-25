export default function PropertyFilters() {
  return (
    <div className="space-y-4">

      {/* Tipo */}
      <div>
        <p className="text-sm mb-2">Tipo de propiedad</p>
        <select className="w-full bg-background border border-border rounded-md p-2">
          <option>Todos</option>
          <option>Casa</option>
          <option>Departamento</option>
        </select>
      </div>

      {/* Ubicación */}
      <div>
        <p className="text-sm mb-2">Zona / Ubicación</p>
        <input
          placeholder="Ciudad o barrio"
          className="w-full bg-background border border-border rounded-md p-2"
        />
      </div>

      {/* Precio */}
      <div>
        <p className="text-sm mb-2">Rango de precio</p>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full p-2 pr-8 bg-background border border-border rounded-md"
            placeholder="Min"
          />
          <input
            type="text"
            className="w-full p-2 pr-8 bg-background border border-border rounded-md"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Ambientes */}
      <div>
        <p className="text-sm mb-2">Ambientes</p>
        <div className="flex gap-2 flex-wrap">
          {["1", "2", "3", "4", "5+"].map((room) => (
            <button
              key={room}
              className="w-9 h-9 rounded-full border border-border text-xs hover:bg-muted/20 transition"
            >
              {room}
            </button>
          ))}
        </div>
      </div>

      {/* Antigüedad */}
      <div>
        <p className="text-sm mb-2">Antigüedad</p>
        <select className="w-full bg-background border border-border rounded-md p-2">
          <option>Cualquiera</option>
        </select>
      </div>

    </div>
  )
}