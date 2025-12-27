"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Logging in:", formData)
    // Simulate login
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <Link href="/" className="text-2xl font-bold text-foreground">
            Chachaji's Shop
          </Link>
          <Link href="/register" className="text-sm text-primary hover:underline">
            Need an account?
          </Link>
        </div>
      </header>

      {/* Login Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Login to access your dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone/Email */}
              <div>
                <Label htmlFor="phone">Phone Number or Email</Label>
                <Input
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone or email"
                  className="mt-2"
                />
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter your password"
                  className="mt-2"
                />
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                Login
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Register now
                </Link>
              </p>
            </form>
          </Card>

          {/* Customer Note */}
          <div className="mt-8 p-4 bg-accent rounded-lg">
            <p className="text-sm text-center text-accent-foreground">
              <strong>Looking for services?</strong> No account needed!{" "}
              <Link href="/marketplace" className="text-primary hover:underline">
                Browse marketplace
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
