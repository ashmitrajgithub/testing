import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Shield, Clock, Phone, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Chachaji's Shop
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/marketplace" className="text-sm text-muted-foreground hover:text-foreground transition">
              Marketplace
            </Link>
            <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground transition">
              Register
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Find Trusted Local Services <span className="text-primary">Near You</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Connect with verified electricians, plumbers, and local service providers in seconds. Fast, reliable, and
            trusted by your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace">
              <Button size="lg" className="w-full sm:w-auto text-base px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 bg-transparent">
                Register Your Business
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Why Choose Chachaji's Shop?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MapPin className="w-6 h-6" />}
              title="Location-Based Search"
              description="Automatically find service providers near you with smart radius filtering (1km, 3km, 5km)"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Verified Professionals"
              description="Multi-level verification with OTP, photo, and admin approval ensures trusted service"
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Real-Time Availability"
              description="See who's available right now - no more wasted calls to busy workers"
            />
            <FeatureCard
              icon={<Search className="w-6 h-6" />}
              title="Category Filtering"
              description="Find exactly the right expert - from home electricians to industrial specialists"
            />
            <FeatureCard
              icon={<Phone className="w-6 h-6" />}
              title="Emergency Mode"
              description="Urgent repair? Emergency mode shows only available workers sorted by distance"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Transparent Service"
              description="Track your leads, see call history, and build your business reputation"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="500+" label="Verified Workers" />
            <StatCard number="10k+" label="Happy Customers" />
            <StatCard number="50+" label="Service Categories" />
            <StatCard number="24/7" label="Support Available" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">How It Works</h2>
          <div className="space-y-8">
            <StepCard
              step="1"
              title="Search by Location"
              description="Our app automatically detects your location and shows nearby service providers"
            />
            <StepCard
              step="2"
              title="Filter by Service"
              description="Choose the exact service you need - electrician, plumber, or any local service"
            />
            <StepCard
              step="3"
              title="Connect Instantly"
              description="Click 'Call Now' to connect directly with verified professionals near you"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
            Join thousands of satisfied customers finding trusted local services every day
          </p>
          <Link href="/marketplace">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Find Services Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-foreground">Chachaji's Shop</div>
            <nav className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition">
                Terms & Conditions
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Chachaji's Shop. All rights reserved.</p>
            <p className="mt-2">Presented by Nikosta Tech Team</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
        {step}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
