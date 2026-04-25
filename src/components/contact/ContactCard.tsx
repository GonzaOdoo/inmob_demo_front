import { Mail, Phone, MapPin, UserRound } from "lucide-react"

export default function ContactCard({ contact }: any) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 hover:bg-muted/10 transition">

      <div className="flex gap-4 items-center">

        {/* Avatar */}
        <div className="w-16 h-16 rounded-xl flex items-center justify-center">
          <UserRound className="w-12 h-12" />
        </div>

        {/* Contenido */}
        <div className="flex-1 space-y-1">

          {/* Nombre */}
          <h3 className="font-semibold">
            {contact.name}
          </h3>

          {/* Info */}
          <div className="text-sm text-muted space-y-1">

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="truncate">{contact.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{contact.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{contact.city}, {contact.country}</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}