import DataTable from "@/components/admin/DataTable"
import { pendingVerifications } from "@/lib/mock-data"

export default function VerificationPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Pending Verifications</h1>
      <DataTable data={pendingVerifications} />
    </div>
  )
}
