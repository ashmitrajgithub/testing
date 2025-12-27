import { callLogs } from "@/lib/mock-data"

export default function CallsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Call Logs</h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">City</th>
              <th className="p-3">Category</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {callLogs.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.city}</td>
                <td className="p-3">{c.category}</td>
                <td className="p-3">{c.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
