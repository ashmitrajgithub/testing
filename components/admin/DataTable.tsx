import StatusBadge from "./StatusBadge"

export default function DataTable({ data }: { data: any[] }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3">Phone</th>
            <th className="p-3">City</th>
            <th className="p-3">Status</th>
            <th className="p-3">Leads</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.phone}</td>
              <td className="p-3">{u.city}</td>
              <td className="p-3"><StatusBadge status={u.status} /></td>
              <td className="p-3">{u.leads}</td>
              <td className="p-3">
                <button className="text-blue-600 text-xs">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
