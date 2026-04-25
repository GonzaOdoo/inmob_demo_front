import { createFileRoute } from "@tanstack/react-router"
import PropertiesPage from "@/pages/Poperties"
import CreatePropertyPage from "@/pages/CreatePropertyPage"

export const Route = createFileRoute("/_app/properties/")({
  component: PropertiesPage,
})