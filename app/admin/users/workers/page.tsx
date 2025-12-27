import DataTable from "@/components/admin/DataTable"
import { workers } from "@/lib/mock-data"

export default function WorkersPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Workers</h1>
      </div>
      <DataTable data={workers} />
    </>
  )
}
