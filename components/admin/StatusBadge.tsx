import { Badge } from "@/components/ui/badge"

export default function StatusBadge({ status }: { status: string }) {
  const map: any = {
    verified: "default", // uses primary color, usually black/dark
    pending: "secondary", // usually gray/yellowish depending on theme
    rejected: "destructive", // red
  }

  // Custom styling if needed, but Badge variants are good
  const variant = map[status] || "outline"

  // We can also override styles if we want exact colors
  let className = ""
  if (status === "verified") className = "bg-green-100 text-green-800 hover:bg-green-100 border-green-200"
  if (status === "pending") className = "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-yellow-200"
  if (status === "rejected") className = "bg-red-100 text-red-800 hover:bg-red-100 border-red-200"

  return (
    <Badge variant="outline" className={`capitalize ${className}`}>
      {status}
    </Badge>
  )
}
