import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/properties")({
  component: PropertiesLayout,
})

function PropertiesLayout() {
  return <Outlet />
}