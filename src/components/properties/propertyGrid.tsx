// src/components/properties/PropertyGrid.tsx

import PropertyCard from "./propertyCard"

export default function PropertyGrid({ properties }: any) {
  return (
    <div className="
      grid 
      gap-6
      [grid-template-columns:repeat(auto-fill,minmax(330px,1fr))]
    ">
      {properties.map((p: any) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  )
}