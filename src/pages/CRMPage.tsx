// src/pages/CRMPage.tsx

import { useState } from "react"
import { opportunities as initialData } from "@/mocks/opportunities"
import OpportunityCard from "@/components/crm/OpportunityCard"

const stages = [
  { key: "new", label: "Nuevos" },
  { key: "contacted", label: "Contactados" },
  { key: "qualified", label: "Calificados" },
]

export default function CRMPage() {
  const [items, setItems] = useState(initialData)
  const [draggedId, setDraggedId] = useState<string | null>(null)

  const onDrop = (stage: string) => {
    if (!draggedId) return

    setItems((prev) =>
      prev.map((item) =>
        item.id === draggedId ? { ...item, stage } : item
      )
    )

    setDraggedId(null)
  }

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-semibold">
        Gestión de oportunidades
      </h1>

      <div className="flex gap-6 overflow-x-auto">

  {stages.map((stage) => (
    <div
      key={stage.key}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(stage.key)}
      className="min-w-[320px] space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          {stage.label}
          <span className="text-muted text-xs">
            {items.filter(i => i.stage === stage.key).length}
          </span>
        </div>

        <span className="text-muted">•••</span>
      </div>

      {/* Cards */}
      <div className="space-y-4 min-h-[200px]">
        {items
          .filter((item) => item.stage === stage.key)
          .map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => setDraggedId(item.id)}
              className="cursor-grab active:cursor-grabbing"
            >
              <OpportunityCard item={item} />
            </div>
          ))}
      </div>
    </div>
  ))}

</div>
    </div>
  )
}