import DataTable from "@/components/admin/DataTable"
import { workers } from "@/lib/mock-data"

export default function WorkersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Workers</h1>
      <DataTable data={workers} />
    </div>
  )
}
