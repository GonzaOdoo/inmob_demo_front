//auth.ts

import { apiFetch } from "@/lib/api"

export async function loginRequest(email: string, tenantSlug: string, password: string) {
  return apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, tenantSlug, password }), 
  })
}
export async function registerRequest(data: {
  agencyName: string
  slug?: string
  ownerEmail: string
  ownerFirstName: string
  ownerLastName: string
  country: string
  timezone: string
  password: string
}) {
  return apiFetch("/api/register", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export async function checkSlug(slug: string) {
  return apiFetch(`/api/register/check-slug/${slug}`)
}

export async function getMe() {
  return apiFetch("/api/auth/me")
}