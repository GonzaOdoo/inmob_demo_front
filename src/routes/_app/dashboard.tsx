// src/router/routes/_app/dashboard.tsx
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/dashboard")({
  component: Dashboard,
})

function Dashboard() {
  return <div>Dashboard</div>
}