import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, MessageSquare } from "lucide-react"

export default function ContactPage() {
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
            <h1 className="text-3xl font-bold text-foreground mb-6">Contact Us</h1>
            <p className="text-muted-foreground mb-8">
              Have questions or need support? We're here to help! Reach out to the Nikosta Tech Team.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-muted">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:nikosta.tech@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition"
                >
                  nikosta.tech@gmail.com
                </a>
              </Card>

              <Card className="p-6 bg-muted">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                <a href="tel:+919560603635" className="text-sm text-muted-foreground hover:text-primary transition">
                  +91 95606 03635
                </a>
              </Card>

              <Card className="p-6 bg-muted">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Social Media</h3>
                <p className="text-sm text-muted-foreground">@nikosta.tech</p>
              </Card>
            </div>
          </Card>

          <Card className="p-6 bg-accent">
            <h2 className="text-xl font-semibold text-foreground mb-3">Business Hours</h2>
            <p className="text-sm text-muted-foreground">
              Monday - Saturday: 9:00 AM - 6:00 PM IST
              <br />
              Sunday: Closed
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              We typically respond to all inquiries within 24-48 hours during business days.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
