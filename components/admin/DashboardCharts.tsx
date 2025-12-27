"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", calls: 186, leads: 80 },
  { month: "February", calls: 305, leads: 200 },
  { month: "March", calls: 237, leads: 120 },
  { month: "April", calls: 73, leads: 190 },
  { month: "May", calls: 209, leads: 130 },
  { month: "June", calls: 214, leads: 140 },
]

const chartConfig = {
  calls: {
    label: "Calls",
    color: "hsl(var(--chart-1))",
  },
  leads: {
    label: "Leads",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function DashboardCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Activity</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="calls" fill="var(--color-calls)" radius={4} />
            <Bar dataKey="leads" fill="var(--color-leads)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total calls and leads for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
