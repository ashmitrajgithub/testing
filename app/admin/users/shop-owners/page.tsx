import DataTable from "@/components/admin/DataTable"
import { shopOwners } from "@/lib/mock-data"

export default function ShopOwnersPage() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Shop Owners</h1>
      <DataTable data={shopOwners} />
    </>
  )
}
