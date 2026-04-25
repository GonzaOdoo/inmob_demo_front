import { apiFetch } from "@/lib/api"

export async function getTenant() {
  return apiFetch("/api/tenants/me")
}

export async function updateTenant(data: any) {
  return apiFetch("/api/tenants/me", {
    method: "PUT",
    body: JSON.stringify(data),
  })
}