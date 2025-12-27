import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { callLogs } from "@/lib/mock-data"
  import { Badge } from "@/components/ui/badge"

  export default function CallsPage() {
    return (
      <div className="w-full">
        <h1 className="text-xl font-bold mb-4">Call Logs</h1>

        <div className="rounded-md border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User Name</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {callLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.name}</TableCell>
                  <TableCell>{log.city}</TableCell>
                  <TableCell>{log.category}</TableCell>
                  <TableCell>{log.time}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Completed</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
