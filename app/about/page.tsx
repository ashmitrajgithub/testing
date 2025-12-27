import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <Link href="/" className="text-2xl font-bold text-foreground">
            Chachaji's Shop
          </Link>
          <div className="w-24" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-6">About Chachaji's Shop</h1>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Chachaji's Shop is revolutionizing local service discovery by prioritizing speed, trust, and
                user-friendliness while addressing customer pain points through our innovative platform.
              </p>

              <p>
                Developed by Nikosta Tech Team, our platform connects customers with verified local service providers
                including electricians, plumbers, carpenters, and many other skilled professionals.
              </p>

              <p>
                We understand the challenges of finding reliable local services quickly, especially during emergencies.
                That's why we built a platform that emphasizes location-based search, real-time availability, and
                multi-level verification to ensure trust and reliability.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To create a trusted ecosystem where customers can instantly find and connect with verified local service
                providers, making everyday life easier and more convenient.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the go-to platform for local service discovery across India, empowering both customers and
                service providers with technology that builds trust and efficiency.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-primary text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Presented by Nikosta Tech Team</h2>
            <p className="mb-4 opacity-90">
              We're passionate about solving real-world problems through innovative technology. Chachaji's Shop is our
              commitment to making local service discovery seamless and trustworthy.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong> nikosta.tech@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 95606 03635
              </p>
              <p>
                <strong>Social:</strong> @nikosta.tech
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
