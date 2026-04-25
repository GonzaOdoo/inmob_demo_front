// src/routes/_app/properties/new.tsx
import { createFileRoute } from "@tanstack/react-router"
import CreatePropertyPage from "@/pages/CreatePropertyPage"

export const Route = createFileRoute("/_app/properties/new")({
  component: CreatePropertyPage,
})