'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/images/avatar-placeholder.png",
    joinDate: "January 2025",
    tokenBalance: 250,
    incentivePoints: 1250
  };
  
  // Mock reservation data
  const reservations = [
    { id: "RES-2025-001", property: "Modern Home #42", status: "Active", date: "March 15, 2025", amount: "$350,000" },
    { id: "RES-2025-002", property: "Gothic Home #17", status: "Pending", date: "April 3, 2025", amount: "$425,000" },
    { id: "RES-2024-089", property: "Mediterranean Home #8", status: "Completed", date: "December 10, 2024", amount: "$380,000" }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-drah-blue">User Account</h1>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="reservations">Reservations</TabsTrigger>
          <TabsTrigger value="personalization">Personalization</TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Property Interests</CardTitle>
                <CardDescription>Your saved and viewed properties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-drah-blue">12</div>
                <p className="text-sm text-gray-500">Properties viewed this month</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Saved Properties</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">DRAH Tokens</CardTitle>
                <CardDescription>Your current token balance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-drah-blue">{user.tokenBalance}</div>
                <p className="text-sm text-gray-500">Available tokens</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Manage Tokens</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Incentive Points</CardTitle>
                <CardDescription>Earn points for platform activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-drah-blue">{user.incentivePoints}</div>
                <p className="text-sm text-gray-500">Current point balance</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Redeem Points</Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest interactions on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Viewed Modern Home #42</p>
                    <p className="text-sm text-gray-500">May 18, 2025 at 3:45 PM</p>
                  </div>
                  <Badge>Property View</Badge>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Updated reservation for Gothic Home #17</p>
                    <p className="text-sm text-gray-500">May 15, 2025 at 10:20 AM</p>
                  </div>
                  <Badge>Reservation</Badge>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Earned 250 incentive points</p>
                    <p className="text-sm text-gray-500">May 12, 2025 at 2:30 PM</p>
                  </div>
                  <Badge>Rewards</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Completed property tour</p>
                    <p className="text-sm text-gray-500">May 10, 2025 at 11:15 AM</p>
                  </div>
                  <Badge>Tour</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reservations Tab */}
        <TabsContent value="reservations">
          <Card>
            <CardHeader>
              <CardTitle>Reservation Status</CardTitle>
              <CardDescription>Track your current and past property reservations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {reservations.map((reservation) => (
                  <div key={reservation.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{reservation.property}</h3>
                      <Badge variant={
                        reservation.status === "Active" ? "default" : 
                        reservation.status === "Pending" ? "outline" : 
                        "secondary"
                      }>
                        {reservation.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Reservation ID</p>
                        <p>{reservation.id}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Date</p>
                        <p>{reservation.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Amount</p>
                        <p>{reservation.amount}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      {reservation.status !== "Completed" && (
                        <Button size="sm" variant="outline">Update</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Make New Reservation</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Personalization Tab */}
        <TabsContent value="personalization">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Management</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Mailing Address</Label>
                  <Input id="address" placeholder="Enter your address" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-gray-500">Receive updates via text message</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Property Alerts</p>
                    <p className="text-sm text-gray-500">Get notified about new properties</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Reservation Updates</p>
                    <p className="text-sm text-gray-500">Get notified about reservation changes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Communications</p>
                    <p className="text-sm text-gray-500">Receive promotional content</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>Manage your password and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" placeholder="Enter your current password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" placeholder="Enter a new password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirm your new password" />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Update Security Settings</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
