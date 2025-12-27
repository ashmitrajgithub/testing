import StatCard from "@/components/admin/StatCard"

export default function AdminDashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Shop Owners" value="1,248" />
        <StatCard title="Workers" value="2,931" />
        <StatCard title="Verified Profiles" value="3,402" />
        <StatCard title="Total Calls" value="12,489" />
      </div>

      <div className="mt-10 bg-white rounded-xl p-6 shadow">
        <h2 className="font-semibold text-lg mb-4">System Overview</h2>
        <p className="text-sm text-gray-600">
          Marketplace visibility, verification, call tracking and analytics are controlled from admin.
        </p>
      </div>
    </>
  )
}
