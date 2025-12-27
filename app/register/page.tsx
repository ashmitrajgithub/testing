"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload } from "lucide-react"
import { getCategoryList, getSubcategories } from "@/lib/categories"

const serviceCategories = [
  "Electrician - Home",
  "Electrician - Industrial",
  "Plumber - Bathroom",
  "Plumber - Pipeline",
  "Plumber - Water Tank",
  "Carpenter",
  "Painter",
  "Mason",
  "AC Technician",
  "Mobile Repair",
  "Computer Repair",
  "Appliance Repair",
  "Cleaning Services",
  "Pest Control",
  "Other",
]

export default function RegisterPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"shop-owner" | "worker">("worker")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subcategory: "",
    address: "",
    photo: null as File | null,
  })
  const [otp, setOtp] = useState("")
  const [showOtpVerification, setShowOtpVerification] = useState(false)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, photo: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSendOtp = () => {
    // Simulate sending OTP
    setShowOtpVerification(true)
    console.log("Sending OTP to:", formData.phone)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate registration
    console.log("Registering user:", formData, "Type:", userType)
    // Redirect to dashboard after successful registration
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
          <Link href="/login" className="text-sm text-primary hover:underline">
            Already have an account?
          </Link>
        </div>
      </header>

      {/* Registration Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Create Your Account</h1>
              <p className="text-muted-foreground">
                Register as a service provider and start receiving customer requests
              </p>
            </div>

            {/* User Type Selection */}
            <div className="mb-8">
              <Label className="text-base mb-3 block">I am a</Label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setUserType("worker")}
                  className={`p-4 rounded-lg border-2 transition ${
                    userType === "worker" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="font-semibold text-foreground">Worker / Service Provider</div>
                  <div className="text-sm text-muted-foreground mt-1">Individual providing services</div>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("shop-owner")}
                  className={`p-4 rounded-lg border-2 transition ${
                    userType === "shop-owner" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="font-semibold text-foreground">Shop Owner</div>
                  <div className="text-sm text-muted-foreground mt-1">Business with shop location</div>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="mt-2"
                />
              </div>

              {/* Email (Optional) */}
              <div>
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="mt-2"
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone">
                  Contact Number <span className="text-destructive">*</span>
                </Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="flex-1"
                    disabled={showOtpVerification}
                  />
                  {!showOtpVerification && (
                    <Button type="button" onClick={handleSendOtp} variant="outline">
                      Send OTP
                    </Button>
                  )}
                </div>
              </div>

              {/* OTP Verification */}
              {showOtpVerification && (
                <div>
                  <Label htmlFor="otp">
                    Enter OTP <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      id="otp"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                      className="flex-1"
                    />
                    <Button type="button" variant="outline">
                      Verify
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">OTP sent to {formData.phone}</p>
                </div>
              )}

              {/* Main Category */}
              <div>
                <Label htmlFor="category">
                  Service Category <span className="text-destructive">*</span>
                </Label>
                <Select
                  required
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value, subcategory: "" })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select main service category" />
                  </SelectTrigger>
                  <SelectContent>
                    {getCategoryList().map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Subcategory */}
              {formData.category && (
                <div>
                  <Label htmlFor="subcategory">
                    Subcategory <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.subcategory}
                    onValueChange={(value) => setFormData({ ...formData, subcategory: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {getSubcategories(formData.category).map((subcategory) => (
                        <SelectItem key={subcategory} value={subcategory}>
                          {subcategory}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Address */}
              <div>
                <Label htmlFor="address">
                  Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter your complete address"
                  className="mt-2"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <Label htmlFor="photo">Profile Photo</Label>
                <div className="mt-2">
                  {photoPreview ? (
                    <div className="flex items-center gap-4">
                      <img
                        src={photoPreview || "/placeholder.svg"}
                        alt="Preview"
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setPhotoPreview(null)
                          setFormData({ ...formData, photo: null })
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition">
                      <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">Click to upload photo</span>
                      <input id="photo" type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                    </label>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                Create Account
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By registering, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
