"use client"
import Link from "next/link"
import { LayoutDashboard, Users, ShieldCheck, PhoneCall, Settings } from "lucide-react"

const menu = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Shop Owners", href: "/admin/users/shop-owners", icon: Users },
  { name: "Workers", href: "/admin/users/workers", icon: Users },
  { name: "Verification", href: "/admin/verification", icon: ShieldCheck },
  { name: "Calls & Leads", href: "/admin/calls", icon: PhoneCall },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-5 font-bold text-xl">Chachaji Admin</div>
      <nav className="space-y-1 px-3">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-sm"
          >
            <item.icon size={18} />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
