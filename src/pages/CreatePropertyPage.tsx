import { useState } from "react"
import { useNavigate } from "@tanstack/react-router"
import { createProperty } from "@/services/properties"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function CreatePropertyPage() {
  const navigate = useNavigate()

const [form, setForm] = useState({
  title: "",
  price: "",
  type: "house",
  operationType: "sale",
  currency: "USD",
  address: {
    street: "",
    city: "",
    state: "",
    country: "AR",
  },
  features: {
    totalArea: "",
    coveredArea: "",
    rooms: "",
    bathrooms: "",
  },
})

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
     await createProperty({
        ...form,
        price: Number(form.price),
        features: {
            totalArea: Number(form.features.totalArea) || undefined,
            coveredArea: Number(form.features.coveredArea) || undefined,
            rooms: Number(form.features.rooms) || undefined,
            bathrooms: Number(form.features.bathrooms) || undefined,
        },
        })

      navigate({ to: "/properties" })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 flex justify-center">

      <Card className="w-full max-w-2xl">
        <CardContent className="p-6 space-y-6">

          <h1 className="text-xl font-semibold">
            Nueva propiedad
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <Label>Título</Label>
              <Input
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Precio</Label>
              <Input
                type="number"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />
            </div>
            <div>
                <Label>Tipo</Label>
                <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full bg-background border border-border rounded-md p-2"
                >
                    <option value="house">Casa</option>
                    <option value="apartment">Departamento</option>
                    <option value="land">Terreno</option>
                </select>
                </div>

                <div>
                <Label>Operación</Label>
                <select
                    value={form.operationType}
                    onChange={(e) =>
                    setForm({ ...form, operationType: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-md p-2"
                >
                    <option value="sale">Venta</option>
                    <option value="rent">Alquiler</option>
                </select>
                </div>
            <div>
              <Label>Calle</Label>
              <Input
                value={form.address.street}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: {
                      ...form.address,
                      street: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label>Ciudad</Label>
                <Input
                  value={form.address.city}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address: {
                        ...form.address,
                        city: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div>
                <Label>Provincia</Label>
                <Input
                  value={form.address.state}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address: {
                        ...form.address,
                        state: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
            <div>
                <Label>Ambientes</Label>
                <Input
                type="number"
                value={form.features.rooms}
                onChange={(e) =>
                    setForm({
                    ...form,
                    features: {
                        ...form.features,
                        rooms: e.target.value,
                    },
                    })
                }
                />
            </div>

            <div>
                <Label>Baños</Label>
                <Input
                type="number"
                value={form.features.bathrooms}
                onChange={(e) =>
                    setForm({
                    ...form,
                    features: {
                        ...form.features,
                        bathrooms: e.target.value,
                    },
                    })
                }
                />
            </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
            <div>
                <Label>m² totales</Label>
                <Input
                type="number"
                value={form.features.totalArea}
                onChange={(e) =>
                    setForm({
                    ...form,
                    features: {
                        ...form.features,
                        totalArea: e.target.value,
                    },
                    })
                }
                />
            </div>

            <div>
                <Label>m² cubiertos</Label>
                <Input
                type="number"
                value={form.features.coveredArea}
                onChange={(e) =>
                    setForm({
                    ...form,
                    features: {
                        ...form.features,
                        coveredArea: e.target.value,
                    },
                    })
                }
                />
            </div>
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Creando..." : "Crear propiedad"}
            </Button>

          </form>

        </CardContent>
      </Card>
    </div>
  )
}