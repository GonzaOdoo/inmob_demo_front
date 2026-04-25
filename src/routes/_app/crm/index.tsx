import { createFileRoute } from '@tanstack/react-router'
import CRMPage from '@/pages/CRMPage'

export const Route = createFileRoute('/_app/crm/')({
  component: CRMPage,
})
