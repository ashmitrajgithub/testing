export default function MarketplacePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Marketplace Control</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="flex justify-between items-center">
          <span>Marketplace Status</span>
          <button className="px-4 py-2 bg-green-600 text-white rounded">
            Enabled
          </button>
        </div>

        <div className="flex justify-between items-center">
          <span>Emergency Mode</span>
          <button className="px-4 py-2 bg-gray-200 rounded">
            Disabled
          </button>
        </div>
      </div>
    </div>
  )
}
