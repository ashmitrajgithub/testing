"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Search, MapPin, Phone, Star, Filter, Navigation, CheckCircle2, Clock, AlertCircle, Home } from "lucide-react"
import { getCategoryList, getSubcategories } from "@/lib/categories"

const mockProviders = [
  {
    id: "SP001",
    name: "Rajesh Kumar",
    type: "Worker",
    category: "Electrician",
    subcategory: "Residential",
    phone: "+91 98765 43210",
    alternatePhone: ["+91 98765 43211"],
    address: "Shop 12, Main Market, Sector 15, Delhi",
    distance: 0.8,
    rating: 4.8,
    totalLeads: 156,
    verified: true,
    availability: "Available",
    photo: "/electrician-working.png",
  },
  {
    id: "SP002",
    name: "Sharma Plumbing Services",
    type: "Shop Owner",
    category: "Plumber",
    subcategory: "Pipeline Repair",
    phone: "+91 98765 43212",
    alternatePhone: ["+91 98765 43213", "+91 98765 43214"],
    address: "Building 5, Commercial Complex, Sector 18, Delhi",
    distance: 1.2,
    rating: 4.9,
    totalLeads: 243,
    verified: true,
    availability: "Available",
    photo: "/plumber-fixing-pipe.png",
  },
  {
    id: "SP003",
    name: "Mohan Singh",
    type: "Worker",
    category: "Carpenter",
    subcategory: "Furniture",
    phone: "+91 98765 43215",
    alternatePhone: ["+91 98765 43216"],
    address: "Lane 3, Residential Area, Sector 12, Delhi",
    distance: 2.5,
    rating: 4.6,
    totalLeads: 98,
    verified: true,
    availability: "Busy",
    photo: "/carpenter-working.png",
  },
  {
    id: "SP004",
    name: "Quick Fix Electronics",
    type: "Shop Owner",
    category: "Mobile Repair",
    subcategory: "Screen Replacement",
    phone: "+91 98765 43217",
    alternatePhone: ["+91 98765 43218"],
    address: "Shop 45, Tech Plaza, Sector 22, Delhi",
    distance: 3.1,
    rating: 4.7,
    totalLeads: 312,
    verified: true,
    availability: "Available",
    photo: "/mobile-repair.jpg",
  },
  {
    id: "SP005",
    name: "Vikram Painter",
    type: "Worker",
    category: "Painter",
    subcategory: "Interior",
    phone: "+91 98765 43219",
    alternatePhone: [],
    address: "House 78, Green Park, Sector 9, Delhi",
    distance: 4.2,
    rating: 4.5,
    totalLeads: 67,
    verified: false,
    availability: "Not Available",
    photo: "/artist-at-work.png",
  },
]

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Services")
  const [selectedSubcategory, setSelectedSubcategory] = useState("All")
  const [radiusFilter, setRadiusFilter] = useState("5")
  const [emergencyMode, setEmergencyMode] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const filteredProviders = mockProviders.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      selectedCategory === "All Services" ||
      (provider.category === selectedCategory &&
        (selectedSubcategory === "All" || provider.subcategory === selectedSubcategory))

    const matchesRadius = provider.distance <= Number.parseFloat(radiusFilter)

    const matchesEmergency = !emergencyMode || provider.availability === "Available"

    return matchesSearch && matchesCategory && matchesRadius && matchesEmergency
  })

  const handleCall = (providerId: string, phone: string) => {
    console.log(`Tracking call to provider ${providerId} at ${phone}`)
    // In production, this would increment the lead counter
    window.location.href = `tel:${phone}`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Chachaji's Shop
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/register">
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </Link>
              <Link href="/login">
                <Button size="sm">Login</Button>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, service, or Service ID..."
                className="pl-10"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={(value) => {
                setSelectedCategory(value)
                setSelectedSubcategory("All")
              }}
            >
              <SelectTrigger className="md:w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Services">All Services</SelectItem>
                {getCategoryList().map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {selectedCategory !== "All Services" && (
              <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                <SelectTrigger className="md:w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All {selectedCategory}</SelectItem>
                  {getSubcategories(selectedCategory).map((subcategory) => (
                    <SelectItem key={subcategory} value={subcategory}>
                      {subcategory}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-muted rounded-lg space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Radius:</span>
                  <div className="flex gap-2">
                    {["1", "3", "5"].map((radius) => (
                      <Button
                        key={radius}
                        size="sm"
                        variant={radiusFilter === radius ? "default" : "outline"}
                        onClick={() => setRadiusFilter(radius)}
                      >
                        {radius} km
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-destructive" />
                  <Button
                    size="sm"
                    variant={emergencyMode ? "destructive" : "outline"}
                    onClick={() => setEmergencyMode(!emergencyMode)}
                  >
                    Emergency Mode
                  </Button>
                  {emergencyMode && <span className="text-sm text-muted-foreground">(Available only)</span>}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Navigation className="w-4 h-4" />
                <span>Using your current location - Sector 15, Delhi</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            {emergencyMode ? "Emergency Services Available" : "Service Providers Near You"}
          </h2>
          <p className="text-sm text-muted-foreground">{filteredProviders.length} providers found</p>
        </div>

        {filteredProviders.length === 0 ? (
          <Card className="p-12 text-center">
            <Home className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No providers found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters or search criteria</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All Services")
                setSelectedSubcategory("All")
                setRadiusFilter("5")
                setEmergencyMode(false)
              }}
            >
              Reset Filters
            </Button>
          </Card>
        ) : (
          <div className="grid gap-6">
            {filteredProviders.map((provider) => (
              <Card key={provider.id} className="p-6 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <img
                      src={provider.photo || "/placeholder.svg"}
                      alt={provider.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-semibold text-foreground">{provider.name}</h3>
                          {provider.verified && (
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {provider.type} • Service ID: {provider.id}
                        </p>
                        <Badge variant="outline">
                          {provider.category} - {provider.subcategory}
                        </Badge>
                      </div>

                      {/* Availability Status */}
                      <Badge
                        variant={
                          provider.availability === "Available"
                            ? "default"
                            : provider.availability === "Busy"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          provider.availability === "Available"
                            ? "bg-chart-3 text-white"
                            : provider.availability === "Busy"
                              ? "bg-chart-5 text-white"
                              : ""
                        }
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        {provider.availability}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground">{provider.phone}</p>
                          {provider.alternatePhone.length > 0 && (
                            <p className="text-xs text-muted-foreground">
                              +{provider.alternatePhone.length} alternate numbers
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm text-foreground">{provider.address}</p>
                          <p className="text-xs text-muted-foreground">{provider.distance.toFixed(1)} km away</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-chart-5 text-chart-5" />
                        <span className="text-sm font-medium">{provider.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{provider.totalLeads} total leads</div>
                    </div>
                  </div>

                  {/* Call Button */}
                  <div className="flex-shrink-0 flex items-center">
                    <Button
                      size="lg"
                      onClick={() => handleCall(provider.id, provider.phone)}
                      className="w-full md:w-auto"
                      disabled={provider.availability === "Not Available"}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="container mx-auto px-4 pb-8">
        <Card className="p-4 bg-muted">
          <p className="text-sm text-center text-muted-foreground">
            <strong>Note:</strong> Chachaji's Shop connects you with local service providers. We verify contact details
            but do not guarantee service quality. Please verify credentials before hiring.
          </p>
        </Card>
      </div>
    </div>
  )
}
