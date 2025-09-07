import { createFileRoute } from '@tanstack/react-router'
import Setups from '@/features/setups'

export const Route = createFileRoute('/_authenticated/setups/')({
  component: Setups,
})
