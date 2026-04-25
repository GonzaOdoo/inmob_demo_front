import ContactCard from "./ContactCard"

export default function ContactGrid({ contacts }: any) {
  return (
    <div className="
      grid 
      gap-4
      [grid-template-columns:repeat(auto-fill,minmax(330px,1fr))]
    ">
      {contacts.map((c: any) => (
        <ContactCard key={c.id} contact={c} />
      ))}
    </div>
  )
}