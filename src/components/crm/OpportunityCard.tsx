// src/components/crm/OpportunityCard.tsx

import { MessageCircle, UserRound } from "lucide-react"

export default function OpportunityCard({ item }: any) {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 space-y-4 shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-start text-xs">
        <span
          className={`
            px-2 py-1 rounded-md font-medium
            ${item.priority === "high" && "bg-green-500/20 text-green-300"}
            ${item.priority === "medium" && "bg-yellow-500/20 text-yellow-300"}
          `}
        >
          PRIORIDAD {item.priority === "high" ? "ALTA" : item.priority === "medium" ? "MEDIA" : "BAJA"}
        </span>

        <span className="text-muted">Hace 2h</span>
      </div>

      {/* Nombre + propiedad */}
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-muted">{item.title}</p>
      </div>

      {/* Caja monto + origen */}
      <div className="bg-background/60 rounded-xl p-3 text-sm space-y-2">
        <div className="flex justify-between">
          <span className="text-muted">Monto estimado</span>
          <span className="font-semibold">
            {item.currency} {item.amount.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted">Origen</span>
          <span className="text-xs bg-muted px-2 py-1 rounded-md">
            {item.source}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2 border-t border-border">

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <UserRound className="w-4 h-4 text-muted" />
        </div>

        {/* Comentario */}
        <button className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted">
          <MessageCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}