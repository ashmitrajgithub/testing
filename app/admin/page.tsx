import StatCard from "@/components/admin/StatCard"
import { DashboardCharts } from "@/components/admin/DashboardCharts"
import { Users, Briefcase, ShieldCheck, PhoneCall } from "lucide-react"

export default function AdminDashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
            title="Shop Owners"
            value="1,248"
            icon={Users}
            trend="+12%"
            description="from last month"
        />
        <StatCard
            title="Workers"
            value="2,931"
            icon={Briefcase}
            trend="+5%"
            description="from last month"
        />
        <StatCard
            title="Verified Profiles"
            value="3,402"
            icon={ShieldCheck}
            trend="+18%"
            description="total verified"
        />
        <StatCard
            title="Total Calls"
            value="12,489"
            icon={PhoneCall}
            trend="+24%"
            description="this month"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
            <DashboardCharts />
        </div>
        <div className="col-span-3">
             {/* We can add another chart or list here */}
             <div className="bg-white rounded-xl border p-6 shadow-sm h-full">
                <h2 className="font-semibold text-lg mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center gap-4 text-sm border-b pb-2 last:border-0">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <div className="flex-1">
                                <p className="font-medium">New worker registered</p>
                                <p className="text-gray-500 text-xs">2 minutes ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
