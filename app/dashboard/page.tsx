// // "use client"

// // import type React from "react"

// // import { useState } from "react"
// // import Link from "next/link"
// // import { Button } from "@/components/ui/button"
// // import { Card } from "@/components/ui/card"
// // import { Badge } from "@/components/ui/badge"
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // import {
// //   User,
// //   Phone,
// //   MapPin,
// //   Briefcase,
// //   LogOut,
// //   Edit,
// //   Eye,
// //   TrendingUp,
// //   CheckCircle2,
// //   Clock,
// //   PhoneCall,
// // } from "lucide-react"

// // // Mock user data - in production would come from auth/database
// // const mockUser = {
// //   name: "Rajesh Kumar",
// //   email: "rajesh@example.com",
// //   phone: "+91 98765 43210",
// //   alternatePhones: ["+91 98765 43211", "+91 98765 43212"],
// //   category: "Electrician",
// //   subcategory: "Residential",
// //   address: "Shop 12, Main Market, Sector 15, Delhi",
// //   type: "Worker",
// //   serviceId: "SP001",
// //   verified: true,
// //   totalLeads: 156,
// //   weeklyLeads: 23,
// //   monthlyLeads: 87,
// //   availability: "Available",
// //   photo: "/electrician-working.png",
// //   joinedDate: "March 2024",
// // }

// // export default function DashboardPage() {
// //   const [availability, setAvailability] = useState(mockUser.availability)

// //   const handleAvailabilityChange = (status: string) => {
// //     setAvailability(status)
// //     console.log("Availability updated to:", status)
// //     // In production, this would update the database
// //   }

// //   return (
// //     <div className="min-h-screen bg-background">
// //       {/* Header */}
// //       <header className="border-b border-border bg-background sticky top-0 z-10">
// //         <div className="container mx-auto px-4 py-4">
// //           <div className="flex items-center justify-between">
// //             <Link href="/" className="text-2xl font-bold text-foreground">
// //               Chachaji's Shop
// //             </Link>
// //             <Button variant="ghost" size="sm" asChild>
// //               <Link href="/">
// //                 <LogOut className="w-4 h-4 mr-2" />
// //                 Logout
// //               </Link>
// //             </Button>
// //           </div>
// //         </div>
// //       </header>

// //       <div className="container mx-auto px-4 py-8">
// //         <div className="max-w-6xl mx-auto">
// //           {/* Welcome Section */}
// //           <div className="mb-8">
// //             <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {mockUser.name}!</h1>
// //             <p className="text-muted-foreground">Manage your profile and track your business performance</p>
// //           </div>

// //           {/* Profile Card */}
// //           <Card className="p-6 mb-8">
// //             <div className="flex flex-col md:flex-row gap-6">
// //               {/* Profile Photo Section */}
// //               <div className="flex flex-col items-center gap-3">
// //                 <Avatar className="w-32 h-32">
// //                   <AvatarImage src={mockUser.photo || "/placeholder.svg"} alt={mockUser.name} />
// //                   <AvatarFallback className="text-3xl">
// //                     {mockUser.name
// //                       .split(" ")
// //                       .map((n) => n[0])
// //                       .join("")}
// //                   </AvatarFallback>
// //                 </Avatar>
// //                 <Button variant="outline" size="sm">
// //                   <Edit className="w-4 h-4 mr-2" />
// //                   Change Photo
// //                 </Button>
// //               </div>

// //               {/* Profile Details */}
// //               <div className="flex-1">
// //                 <div className="flex items-start justify-between mb-4">
// //                   <div>
// //                     <div className="flex items-center gap-2 mb-2">
// //                       <h2 className="text-2xl font-bold text-foreground">{mockUser.name}</h2>
// //                       {mockUser.verified && (
// //                         <Badge variant="secondary" className="bg-primary/10 text-primary">
// //                           <CheckCircle2 className="w-3 h-3 mr-1" />
// //                           Verified
// //                         </Badge>
// //                       )}
// //                     </div>
// //                     <p className="text-sm text-muted-foreground mb-1">
// //                       {mockUser.type} • Service ID:{" "}
// //                       <span className="font-mono font-semibold">{mockUser.serviceId}</span>
// //                     </p>
// //                     <Badge variant="outline">
// //                       {mockUser.category} - {mockUser.subcategory}
// //                     </Badge>
// //                   </div>
// //                 </div>

// //                 <div className="grid md:grid-cols-2 gap-4 mb-4">
// //                   <InfoItem icon={<Phone />} label="Primary Phone" value={mockUser.phone} />
// //                   <InfoItem icon={<User />} label="Email" value={mockUser.email || "Not provided"} />
// //                   <InfoItem icon={<MapPin />} label="Address" value={mockUser.address} />
// //                   <InfoItem icon={<Briefcase />} label="Member Since" value={mockUser.joinedDate} />
// //                 </div>

// //                 {/* Alternate Phone Numbers */}
// //                 {mockUser.alternatePhones.length > 0 && (
// //                   <div className="mb-4">
// //                     <p className="text-sm font-medium text-muted-foreground mb-2">Alternate Phone Numbers:</p>
// //                     <div className="flex flex-wrap gap-2">
// //                       {mockUser.alternatePhones.map((phone, index) => (
// //                         <Badge key={index} variant="secondary">
// //                           {phone}
// //                         </Badge>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Availability Toggle */}
// //                 <div className="border-t border-border pt-4">
// //                   <p className="text-sm font-medium text-foreground mb-3">Current Availability:</p>
// //                   <div className="flex gap-2">
// //                     <Button
// //                       size="sm"
// //                       variant={availability === "Available" ? "default" : "outline"}
// //                       onClick={() => handleAvailabilityChange("Available")}
// //                       className={availability === "Available" ? "bg-chart-3" : ""}
// //                     >
// //                       <CheckCircle2 className="w-4 h-4 mr-2" />
// //                       Available
// //                     </Button>
// //                     <Button
// //                       size="sm"
// //                       variant={availability === "Busy" ? "default" : "outline"}
// //                       onClick={() => handleAvailabilityChange("Busy")}
// //                       className={availability === "Busy" ? "bg-chart-5" : ""}
// //                     >
// //                       <Clock className="w-4 h-4 mr-2" />
// //                       Busy
// //                     </Button>
// //                     <Button
// //                       size="sm"
// //                       variant={availability === "Not Available" ? "default" : "outline"}
// //                       onClick={() => handleAvailabilityChange("Not Available")}
// //                     >
// //                       Not Available
// //                     </Button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border">
// //               <Button asChild>
// //                 <Link href="/dashboard/edit">
// //                   <Edit className="w-4 h-4 mr-2" />
// //                   Edit Profile
// //                 </Link>
// //               </Button>
// //               <Button variant="outline" asChild>
// //                 <Link href="/marketplace">
// //                   <Eye className="w-4 h-4 mr-2" />
// //                   View on Marketplace
// //                 </Link>
// //               </Button>
// //             </div>
// //           </Card>

// //           {/* Stats Grid */}
// //           <div className="grid md:grid-cols-3 gap-6 mb-8">
// //             <StatCard
// //               icon={<PhoneCall className="w-6 h-6" />}
// //               title="Total Leads"
// //               value={mockUser.totalLeads.toString()}
// //               subtitle="All-time calls received"
// //               color="primary"
// //             />
// //             <StatCard
// //               icon={<TrendingUp className="w-6 h-6" />}
// //               title="This Week"
// //               value={mockUser.weeklyLeads.toString()}
// //               subtitle={`${((mockUser.weeklyLeads / mockUser.totalLeads) * 100).toFixed(1)}% of total`}
// //               color="chart-3"
// //             />
// //             <StatCard
// //               icon={<TrendingUp className="w-6 h-6" />}
// //               title="This Month"
// //               value={mockUser.monthlyLeads.toString()}
// //               subtitle={`${((mockUser.monthlyLeads / mockUser.totalLeads) * 100).toFixed(1)}% of total`}
// //               color="chart-2"
// //             />
// //           </div>

// //           {/* Info Cards */}
// //           <div className="grid md:grid-cols-2 gap-6">
// //             <Card className="p-6">
// //               <h3 className="text-lg font-semibold text-foreground mb-3">How Leads Work</h3>
// //               <ul className="space-y-2 text-sm text-muted-foreground">
// //                 <li className="flex gap-2">
// //                   <span className="text-primary">•</span>
// //                   <span>Every time a customer clicks "Call Now" on your profile, it counts as 1 lead</span>
// //                 </li>
// //                 <li className="flex gap-2">
// //                   <span className="text-primary">•</span>
// //                   <span>Leads help you understand your business demand and popular service areas</span>
// //                 </li>
// //                 <li className="flex gap-2">
// //                   <span className="text-primary">•</span>
// //                   <span>Higher leads can improve your visibility in search results</span>
// //                 </li>
// //                 <li className="flex gap-2">
// //                   <span className="text-primary">•</span>
// //                   <span>Keep your availability updated to receive more relevant leads</span>
// //                 </li>
// //               </ul>
// //             </Card>

// //             <Card className="p-6">
// //               <h3 className="text-lg font-semibold text-foreground mb-3">Profile Tips</h3>
// //               <ul className="space-y-2 text-sm text-muted-foreground">
// //                 <li className="flex gap-2">
// //                   <span className="text-primary">•</span>
// //                   <span>Upload a clear profile photo to build trust with customers</span>
// //                 </li>
// //                 <li className="flex gap-2">
// //                   <span className="text-primary">•</span>
// //                   <span>Add multiple phone numbers so customers can always reach you</span>
// //                 </li>
// //                 <li className="flex gap-2">
// //                   <span className="text-primary">•</span>
// //                   <span>Update your availability status regularly for better results</span>
// //                 </li>
// //                 <li className="flex gap-2">
// //                   <span className="text-primary">•</span>
// //                   <span>Complete verification process to get the "Verified" badge</span>
// //                 </li>
// //               </ul>
// //             </Card>
// //           </div>

// //           {/* Disclaimer */}
// //           <Card className="p-4 bg-muted mt-6">
// //             <p className="text-sm text-center text-muted-foreground">
// //               <strong>Note:</strong> Your profile is visible on the marketplace after admin verification. We connect
// //               customers with service providers but don't guarantee service outcomes.
// //             </p>
// //           </Card>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
// //   return (
// //     <div className="flex gap-3">
// //       <div className="text-muted-foreground mt-0.5">{icon}</div>
// //       <div className="min-w-0">
// //         <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
// //         <p className="text-sm text-foreground font-medium break-words">{value}</p>
// //       </div>
// //     </div>
// //   )
// // }

// // function StatCard({
// //   icon,
// //   title,
// //   value,
// //   subtitle,
// //   color,
// // }: {
// //   icon: React.ReactNode
// //   title: string
// //   value: string
// //   subtitle: string
// //   color: string
// // }) {
// //   return (
// //     <Card className="p-6">
// //       <div className={`w-12 h-12 rounded-lg bg-${color}/10 flex items-center justify-center mb-4 text-${color}`}>
// //         {icon}
// //       </div>
// //       <p className="text-sm text-muted-foreground mb-1">{title}</p>
// //       <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
// //       <p className="text-xs text-muted-foreground">{subtitle}</p>
// //     </Card>
// //   )
// // }






// "use client"

// import type React from "react"
// import { useState } from "react"
// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// import {
//   User,
//   Phone,
//   MapPin,
//   Briefcase,
//   LogOut,
//   Edit,
//   Eye,
//   TrendingUp,
//   CheckCircle2,
//   Clock,
//   PhoneCall,
// } from "lucide-react"

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts"

// /* ---------------- MOCK USER DATA ---------------- */

// const mockUser = {
//   name: "Rajesh Kumar",
//   email: "rajesh@example.com",
//   phone: "+91 98765 43210",
//   alternatePhones: ["+91 98765 43211", "+91 98765 43212"],
//   category: "Electrician",
//   subcategory: "Residential",
//   address: "Shop 12, Main Market, Sector 15, Delhi",
//   type: "Worker",
//   serviceId: "SP001",
//   verified: true,
//   totalLeads: 156,
//   weeklyLeads: 23,
//   monthlyLeads: 87,
//   availability: "Available",
//   photo: "/electrician-working.png",
//   joinedDate: "March 2024",
// }

// /* ---------------- GRAPH DATA ---------------- */

// const leadsChartData = [
//   { name: "Week 1", total: 35, weekly: 8, monthly: 20 },
//   { name: "Week 2", total: 62, weekly: 15, monthly: 42 },
//   { name: "Week 3", total: 110, weekly: 23, monthly: 68 },
//   { name: "Week 4", total: 156, weekly: 23, monthly: 87 },
// ]

// /* ---------------- MAIN PAGE ---------------- */

// export default function DashboardPage() {
//   const [availability, setAvailability] = useState(mockUser.availability)

//   return (
//     <div className="min-h-screen bg-background">
//       {/* HEADER */}
//       <header className="sticky top-0 z-10 border-b bg-background">
//         <div className="container mx-auto flex items-center justify-between px-4 py-4">
//           <Link href="/" className="text-2xl font-bold">
//             Chachaji's Shop
//           </Link>
//           <Button variant="ghost" size="sm" asChild>
//             <Link href="/">
//               <LogOut className="w-4 h-4 mr-2" />
//               Logout
//             </Link>
//           </Button>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-8 max-w-6xl">
//         {/* WELCOME */}
//         <h1 className="text-3xl font-bold mb-1">
//           Welcome back, {mockUser.name}!
//         </h1>
//         <p className="text-muted-foreground mb-8">
//           Manage your profile and track your business performance
//         </p>

//         {/* PROFILE CARD */}
//         <Card className="p-6 mb-8">
//           <div className="flex flex-col md:flex-row gap-6">
//             <Avatar className="w-32 h-32">
//               <AvatarImage src={mockUser.photo} />
//               <AvatarFallback>RK</AvatarFallback>
//             </Avatar>

//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-2">
//                 <h2 className="text-2xl font-bold">{mockUser.name}</h2>
//                 {mockUser.verified && (
//                   <Badge className="bg-primary/10 text-primary">
//                     <CheckCircle2 className="w-3 h-3 mr-1" />
//                     Verified
//                   </Badge>
//                 )}
//               </div>

//               <p className="text-sm text-muted-foreground mb-3">
//                 {mockUser.type} • ID:{" "}
//                 <span className="font-mono">{mockUser.serviceId}</span>
//               </p>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <InfoItem icon={<Phone />} label="Phone" value={mockUser.phone} />
//                 <InfoItem icon={<User />} label="Email" value={mockUser.email} />
//                 <InfoItem icon={<MapPin />} label="Address" value={mockUser.address} />
//                 <InfoItem icon={<Briefcase />} label="Joined" value={mockUser.joinedDate} />
//               </div>

//               {/* AVAILABILITY */}
//               <div className="mt-6 flex gap-2">
//                 {["Available", "Busy", "Not Available"].map((status) => (
//                   <Button
//                     key={status}
//                     size="sm"
//                     variant={availability === status ? "default" : "outline"}
//                     onClick={() => setAvailability(status)}
//                   >
//                     {status}
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </Card>

//         {/* STATS */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           <StatCard
//             icon={<PhoneCall />}
//             title="Total Leads"
//             value={mockUser.totalLeads.toString()}
//             subtitle="All-time"
//           />
//           <StatCard
//             icon={<TrendingUp />}
//             title="This Week"
//             value={mockUser.weeklyLeads.toString()}
//             subtitle="Weekly leads"
//           />
//           <StatCard
//             icon={<TrendingUp />}
//             title="This Month"
//             value={mockUser.monthlyLeads.toString()}
//             subtitle="Monthly leads"
//           />
//         </div>

//         {/* GRAPH */}
//         <LeadsGraph />

//         {/* INFO CARDS */}
//         <div className="grid md:grid-cols-2 gap-6 mt-8">
//           <InfoCard
//             title="How Leads Work"
//             items={[
//               "Every call counts as one lead",
//               "More leads improve visibility",
//               "Tracks business demand",
//               "Availability matters",
//             ]}
//           />
//           <InfoCard
//             title="Profile Tips"
//             items={[
//               "Upload clear photo",
//               "Add multiple numbers",
//               "Update availability",
//               "Complete verification",
//             ]}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ---------------- COMPONENTS ---------------- */

// function InfoItem({
//   icon,
//   label,
//   value,
// }: {
//   icon: React.ReactNode
//   label: string
//   value: string
// }) {
//   return (
//     <div className="flex gap-3">
//       <div className="text-muted-foreground">{icon}</div>
//       <div>
//         <p className="text-xs text-muted-foreground">{label}</p>
//         <p className="text-sm font-medium">{value}</p>
//       </div>
//     </div>
//   )
// }

// function StatCard({
//   icon,
//   title,
//   value,
//   subtitle,
// }: {
//   icon: React.ReactNode
//   title: string
//   value: string
//   subtitle: string
// }) {
//   return (
//     <Card className="p-6">
//       <div className="mb-3 text-primary">{icon}</div>
//       <p className="text-sm text-muted-foreground">{title}</p>
//       <p className="text-3xl font-bold">{value}</p>
//       <p className="text-xs text-muted-foreground">{subtitle}</p>
//     </Card>
//   )
// }

// function LeadsGraph() {
//   return (
//     <Card className="p-6">
//       <h3 className="text-lg font-semibold mb-1">Leads Performance</h3>
//       <p className="text-sm text-muted-foreground mb-4">
//         Weekly & Monthly growth
//       </p>

//       <div className="h-[300px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={leadsChartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="total" stroke="#2563eb" strokeWidth={3} />
//             <Line type="monotone" dataKey="monthly" stroke="#16a34a" />
//             <Line type="monotone" dataKey="weekly" stroke="#f59e0b" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </Card>
//   )
// }

// function InfoCard({ title, items }: { title: string; items: string[] }) {
//   return (
//     <Card className="p-6">
//       <h3 className="font-semibold mb-3">{title}</h3>
//       <ul className="space-y-2 text-sm text-muted-foreground">
//         {items.map((item, i) => (
//           <li key={i}>• {item}</li>
//         ))}
//       </ul>
//     </Card>
//   )
// }



"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  User,
  Phone,
  MapPin,
  Briefcase,
  LogOut,
  Edit,
  Eye,
  TrendingUp,
  CheckCircle2,
  PhoneCall,
} from "lucide-react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

/* ---------------- MOCK USER DATA ---------------- */

const mockUser = {
  name: "Rajesh Kumar",
  email: "rajesh@example.com",
  phone: "+91 98765 43210",
  category: "Electrician",
  subcategory: "Residential",
  address: "Shop 12, Main Market, Sector 15, Delhi",
  type: "Worker",
  serviceId: "SP001",
  verified: true,
  totalLeads: 156,
  weeklyLeads: 23,
  monthlyLeads: 87,
  availability: "Available",
  photo: "/electrician-working.png",
  joinedDate: "March 2024",
}

/* ---------------- GRAPH DATA ---------------- */

const leadsChartData = [
  { name: "Week 1", total: 35, weekly: 8, monthly: 20 },
  { name: "Week 2", total: 62, weekly: 15, monthly: 42 },
  { name: "Week 3", total: 110, weekly: 23, monthly: 68 },
  { name: "Week 4", total: 156, weekly: 23, monthly: 87 },
]

/* ---------------- PAGE ---------------- */

export default function DashboardPage() {
  const [availability, setAvailability] = useState(mockUser.availability)

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-bold">
            Chachaji&apos;s Shop
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* WELCOME */}
        <h1 className="text-3xl font-bold mb-1">
          Welcome back, {mockUser.name}!
        </h1>
        <p className="text-muted-foreground mb-8">
          Manage your profile and track your business performance
        </p>

        {/* PROFILE CARD */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src={mockUser.photo} />
              <AvatarFallback>RK</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold">{mockUser.name}</h2>
                {mockUser.verified && (
                  <Badge className="bg-primary/10 text-primary">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                {mockUser.type} • ID{" "}
                <span className="font-mono">{mockUser.serviceId}</span>
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <InfoItem icon={<Phone />} label="Phone" value={mockUser.phone} />
                <InfoItem icon={<User />} label="Email" value={mockUser.email} />
                <InfoItem icon={<MapPin />} label="Address" value={mockUser.address} />
                <InfoItem icon={<Briefcase />} label="Joined" value={mockUser.joinedDate} />
              </div>

              {/* AVAILABILITY */}
              <div className="mt-6 flex gap-2">
                {["Available", "Busy", "Not Available"].map((status) => (
                  <Button
                    key={status}
                    size="sm"
                    variant={availability === status ? "default" : "outline"}
                    onClick={() => setAvailability(status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-6 flex gap-3">
                <Button asChild>
                  <Link href="/dashboard/edit">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Link>
                </Button>

                <Button variant="outline" asChild>
                  <Link href="/marketplace">
                    <Eye className="w-4 h-4 mr-2" />
                    View on Marketplace
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatCard icon={<PhoneCall />} title="Total Leads" value="156" />
          <StatCard icon={<TrendingUp />} title="This Week" value="23" />
          <StatCard icon={<TrendingUp />} title="This Month" value="87" />
        </div>

        {/* GRAPH */}
        <LeadsGraph />
      </div>
    </div>
  )
}

/* ---------------- COMPONENTS ---------------- */

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex gap-3">
      <div className="text-muted-foreground">{icon}</div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <Card className="p-6">
      <div className="mb-2 text-primary">{icon}</div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </Card>
  )
}

function LeadsGraph() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Leads Performance</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={leadsChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="total" stroke="#2563eb" strokeWidth={3} />
            <Line dataKey="monthly" stroke="#16a34a" />
            <Line dataKey="weekly" stroke="#f59e0b" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
