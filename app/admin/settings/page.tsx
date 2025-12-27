import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator />

      <div className="grid gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account's profile information and email address.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Admin User" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="admin@chachaji.com" />
                </div>
                <Button>Save</Button>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Configure how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="new-users" className="flex flex-col space-y-1">
                        <span>New user registrations</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                            Receive notifications when a new user registers.
                        </span>
                    </Label>
                    <Switch id="new-users" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="verification" className="flex flex-col space-y-1">
                        <span>Verification requests</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                            Receive notifications when a new verification request is submitted.
                        </span>
                    </Label>
                    <Switch id="verification" defaultChecked />
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
