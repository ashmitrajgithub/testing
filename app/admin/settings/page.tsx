export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <label className="flex justify-between items-center">
          <span>OTP Retry Limit</span>
          <input type="number" defaultValue={3} className="border p-1 w-20" />
        </label>

        <label className="flex justify-between items-center">
          <span>Call Rate Limit / User</span>
          <input type="number" defaultValue={5} className="border p-1 w-20" />
        </label>
      </div>
    </div>
  )
}
