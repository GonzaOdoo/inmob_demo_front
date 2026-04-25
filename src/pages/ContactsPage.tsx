import { contacts } from "@/mocks/contacts"
import ContactGrid from "@/components/contact/ContactGrid"

export default function ContactsPage() {
  return (
    <div className="space-y-6 p-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Contactos</h1>
        <p className="text-sm text-muted">
          Gestiona tus contactos y clientes potenciales
        </p>
      </div>

      {/* Grid */}
      <ContactGrid contacts={contacts} />

      <div className="text-center text-sm text-muted">
        Mostrando {contacts.length} contactos
      </div>

    </div>
  )
}