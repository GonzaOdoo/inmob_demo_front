import { Outlet, useRouterState } from "@tanstack/react-router"
import Sidebar from "./Sidebar"
import Header from "./Header"
import PropertyFilters from "@/components/properties/propertyFilter"

export default function AppLayout() {

  const pathname = useRouterState({ select: s => s.location.pathname })

  const isProperties = pathname.includes("/properties")


  return (
    <div className="flex h-screen bg-background text-white">
      
      <Sidebar>
        {isProperties && <PropertyFilters />}
      </Sidebar>
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>

    </div>
  )
}