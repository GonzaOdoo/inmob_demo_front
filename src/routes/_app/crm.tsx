// src/router/routes/_app/dashboard.tsx
import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/crm")({
  component: CRM,
})

function CRM() {
  return <Outlet />
}