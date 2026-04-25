// src/routes/_app/properties/$propertyId.tsx
import { createFileRoute } from "@tanstack/react-router"
import PropertyDetailPage from "@/pages/PropertyDetailPage"

export const Route = createFileRoute("/_app/properties/$propertyId")({
  component: PropertyDetailPage,
})