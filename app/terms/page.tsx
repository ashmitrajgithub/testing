import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold text-foreground mb-6">Terms & Conditions</h1>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p className="text-foreground">Last updated: January 2025</p>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Platform Purpose</h2>
                <p>
                  Chachaji's Shop is a platform that connects customers with local service providers. We facilitate
                  connections but do not guarantee service quality or outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">User Responsibilities</h2>
                <p>
                  Service providers must provide accurate information and maintain updated availability status.
                  Customers should verify credentials before hiring any service provider.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Verification</h2>
                <p>
                  We verify contact information through OTP and admin approval. However, we do not guarantee the quality
                  or reliability of services provided.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
                <p>
                  Chachaji's Shop is not responsible for disputes, damages, or issues arising from services provided
                  through our platform. All transactions are between customers and service providers.
                </p>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
