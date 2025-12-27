import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
          <Card className="p-8">
            <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p className="text-foreground">Last updated: January 2025</p>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us, including name, contact information, service
                  details, and location data to connect customers with service providers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
                <p>
                  Your information is used to facilitate connections between customers and service providers, verify
                  identities, track service requests, and improve our platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:{" "}
                  <a href="mailto:nikosta.tech@gmail.com" className="text-primary hover:underline">
                    nikosta.tech@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
