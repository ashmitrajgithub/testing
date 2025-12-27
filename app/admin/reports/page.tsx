import { reports } from "@/lib/mock-data"

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">User Reports</h1>

      <div className="bg-white rounded-xl shadow p-4 space-y-3">
        {reports.map((r) => (
          <div key={r.id} className="border p-3 rounded">
            <p className="font-medium">{r.reason}</p>
            <p className="text-sm text-gray-600">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
