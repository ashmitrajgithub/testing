import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
  import { pendingVerifications } from "@/lib/mock-data"
  import { Check, X } from "lucide-react"
  import { Badge } from "@/components/ui/badge"

  export default function VerificationPage() {
    return (
      <div className="w-full">
        <h1 className="text-xl font-bold mb-4">Pending Verifications</h1>

        <div className="rounded-md border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingVerifications.map((u) => (
                <TableRow key={u.id}>
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell>{u.phone}</TableCell>
                  <TableCell>{u.city}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending Review</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" className="text-green-600 hover:text-green-700 hover:bg-green-50 border-green-200">
                            <Check className="h-4 w-4 mr-1" /> Approve
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                            <X className="h-4 w-4 mr-1" /> Reject
                        </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {pendingVerifications.length === 0 && (
                <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                        No pending verifications.
                    </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
