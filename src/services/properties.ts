import { apiFetch } from "@/lib/api"

export async function getProperties(params?: {
  page?: number
  perPage?: number
  type?: string
  operationType?: string
  status?: string
}) {
  const query = new URLSearchParams()

  if (params?.page) query.append("page", String(params.page))
  if (params?.perPage) query.append("perPage", String(params.perPage))
  if (params?.type) query.append("type", params.type)
  if (params?.operationType) query.append("operationType", params.operationType)
  if (params?.status) query.append("status", params.status)

  return apiFetch(`/api/properties?${query.toString()}`)
}

export async function createProperty(data: any) {
  return apiFetch("/api/properties", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export async function getPropertyById(id: string) {
  return apiFetch(`/api/properties/${id}`)
}