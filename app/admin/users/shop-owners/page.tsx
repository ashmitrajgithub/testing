"use client"
import { useEffect, useState } from "react"
import DataTable from "@/components/admin/DataTable"
import { shopOwners as mockShopOwners } from "@/lib/mock-data"
import { fetchUsers } from "@/lib/api"

export default function ShopOwnersPage() {
  const [data, setData] = useState(mockShopOwners)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const users = await fetchUsers('shop-owners')
      if (users) {
        setData(users)
      }
      setLoading(false)
    }
    load()
  }, [])

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Shop Owners</h1>
      <DataTable data={data} />
    </>
  )
}
