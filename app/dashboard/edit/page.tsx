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
import { ArrowLeft, Upload, Plus, X } from "lucide-react"
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

const mockUser = {
  name: "Rajesh Kumar",
  email: "rajesh@example.com",
  phone: "+91 98765 43210",
  alternatePhones: ["+91 98765 43211"],
  category: "Electrician",
  subcategory: "Residential",
  address: "Shop 12, Main Market, Sector 15, Delhi",
  photo: "/electrician-working.png",
}

export default function EditProfilePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.phone,
    category: mockUser.category,
    subcategory: mockUser.subcategory,
    address: mockUser.address,
    photo: null as File | null,
  })
  const [alternatePhones, setAlternatePhones] = useState<string[]>(mockUser.alternatePhones)
  const [newPhone, setNewPhone] = useState("")
  const [photoPreview, setPhotoPreview] = useState<string | null>(mockUser.photo)

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

  const handleAddPhone = () => {
    if (newPhone && alternatePhones.length < 5) {
      setAlternatePhones([...alternatePhones, newPhone])
      setNewPhone("")
    }
  }

  const handleRemovePhone = (index: number) => {
    setAlternatePhones(alternatePhones.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating profile:", formData, "Alternate phones:", alternatePhones)
    // In production, this would update the database
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back to Dashboard</span>
          </Link>
          <Link href="/" className="text-2xl font-bold text-foreground">
            Chachaji's Shop
          </Link>
          <div className="w-24" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Edit Profile Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Edit Your Profile</h1>
              <p className="text-muted-foreground">Update your information to keep your profile current</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Profile Photo */}
              <div>
                <Label>Profile Photo</Label>
                <div className="mt-2">
                  {photoPreview ? (
                    <div className="flex items-center gap-4">
                      <img
                        src={photoPreview || "/placeholder.svg"}
                        alt="Preview"
                        className="w-32 h-32 rounded-lg object-cover"
                      />
                      <div className="space-y-2">
                        <label htmlFor="photo-upload">
                          <Button type="button" variant="outline" size="sm" asChild>
                            <span>
                              <Upload className="w-4 h-4 mr-2" />
                              Change Photo
                            </span>
                          </Button>
                        </label>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setPhotoPreview(null)
                            setFormData({ ...formData, photo: null })
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handlePhotoChange}
                      />
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

              {/* Email */}
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
                  Primary Contact Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Note: Changing your phone number will require OTP verification
                </p>
              </div>

              {/* Alternate Phone Numbers */}
              <div>
                <Label>Alternate Phone Numbers (Optional, Max 5)</Label>
                <div className="space-y-2 mt-2">
                  {alternatePhones.map((phone, index) => (
                    <div key={index} className="flex gap-2">
                      <Input value={phone} disabled className="flex-1" />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemovePhone(index)}
                        className="text-destructive hover:text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}

                  {alternatePhones.length < 5 && (
                    <div className="flex gap-2">
                      <Input
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        placeholder="Add alternate number"
                        className="flex-1"
                      />
                      <Button type="button" variant="outline" onClick={handleAddPhone} disabled={!newPhone}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground">{alternatePhones.length}/5 alternate numbers added</p>
                </div>
              </div>

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

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button type="submit" size="lg" className="flex-1">
                  Save Changes
                </Button>
                <Button type="button" variant="outline" size="lg" asChild>
                  <Link href="/dashboard">Cancel</Link>
                </Button>
              </div>
            </form>
          </Card>

          {/* Info Card */}
          <Card className="p-4 bg-muted mt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> Changes to your profile will be visible on the marketplace immediately.
              Changes to your phone number require admin re-verification.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
