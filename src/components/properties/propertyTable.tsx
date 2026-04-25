import { getRandomImage } from "@/mocks/demoImages"

export default function PropertyTable({ properties }: any) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">

      {/* Header */}
      <div className="grid grid-cols-6 px-4 py-3 text-xs text-muted border-b border-border">
        <span>PROPIEDAD</span>
        <span>OPERACIÓN</span>
        <span>PRECIO</span>
        <span>PORTALES</span>
        <span>ACCIÓN</span>
        <span>ESTADO</span>
      </div>

      {properties.map((p: any) => {
        const image = p.images?.[0] || getRandomImage(p.id)

        return (
          <div
            key={p.id}
            className="grid grid-cols-6 items-center px-4 py-4 border-b border-border hover:bg-muted/20 transition"
          >
            {/* Propiedad */}
            <div className="flex items-center gap-3">
              <img
                src={image}
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div>
                <p className="font-medium text-sm">{p.title}</p>
                <p className="text-xs text-muted">
                  {p.address?.city}, {p.address?.state}
                </p>
              </div>
            </div>

            {/* Operación */}
            <span className="text-xs bg-muted px-2 py-1 rounded-md w-fit">
              {p.operationType === "sale" ? "Venta" : "Alquiler"}
            </span>

            {/* Precio */}
            <span className="font-semibold">
              {p.currency} {p.price?.toLocaleString()}
            </span>

            {/* Portales (mock) */}
            <div className="flex gap-1">
              <div className="w-6 h-6 bg-muted rounded" />
              <div className="w-6 h-6 bg-muted rounded" />
            </div>

            {/* Acción */}
            <button className="bg-primary text-black px-3 py-1 rounded-md text-sm w-40 h-12">
              Gestionar
            </button>

            {/* Estado */}
            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-md w-fit">
              {p.status}
            </span>
          </div>
        )
      })}
    </div>
  )
}