import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Users, 
  MessageSquare, 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  Mail,
  Smartphone
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Calls Today",
      value: "247",
      change: "+12%",
      trend: "up",
      icon: Phone,
      color: "text-blue-600"
    },
    {
      title: "Active Conversations", 
      value: "18",
      change: "+5%",
      trend: "up",
      icon: MessageSquare,
      color: "text-green-600"
    },
    {
      title: "CRM Contacts",
      value: "1,324",
      change: "+8%",
      trend: "up", 
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Success Rate",
      value: "94.2%",
      change: "-2%",
      trend: "down",
      icon: BarChart3,
      color: "text-orange-600"
    }
  ];

  const recentCalls = [
    { id: 1, contact: "John Smith", status: "completed", duration: "5:32", time: "10 mins ago", outcome: "Booked" },
    { id: 2, contact: "Sarah Johnson", status: "in-progress", duration: "2:15", time: "Now", outcome: "Talking" },
    { id: 3, contact: "Mike Davis", status: "failed", duration: "0:45", time: "15 mins ago", outcome: "No Answer" },
    { id: 4, contact: "Emily Brown", status: "completed", duration: "8:21", time: "22 mins ago", outcome: "Follow-up" },
  ];

  const upcomingBookings = [
    { id: 1, contact: "Alex Chen", time: "2:00 PM", type: "Demo Call", platform: "Zoom" },
    { id: 2, contact: "Lisa Wang", time: "3:30 PM", type: "Consultation", platform: "Phone" },
    { id: 3, contact: "Tom Wilson", time: "4:15 PM", type: "Follow-up", platform: "Teams" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your AI voice platform.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent">
          <Phone className="w-4 h-4 mr-2" />
          Start New Campaign
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Calls */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Recent AI Calls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCalls.map((call) => (
                <div key={call.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      call.status === "completed" ? "bg-green-500" : 
                      call.status === "in-progress" ? "bg-blue-500" : "bg-red-500"
                    }`} />
                    <div>
                      <p className="font-medium">{call.contact}</p>
                      <p className="text-sm text-muted-foreground">{call.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={
                      call.status === "completed" ? "default" : 
                      call.status === "in-progress" ? "secondary" : "destructive"
                    }>
                      {call.outcome}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">{call.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Bookings */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Today's Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium">{booking.contact}</p>
                      <p className="text-sm text-muted-foreground">{booking.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{booking.time}</p>
                    <p className="text-sm text-muted-foreground">{booking.platform}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Communication Channels Overview */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Communication Channels Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <Mail className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <h3 className="font-semibold">Email</h3>
              <p className="text-2xl font-bold mt-1">152</p>
              <p className="text-sm text-muted-foreground">Messages today</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <MessageSquare className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="text-2xl font-bold mt-1">89</p>
              <p className="text-sm text-muted-foreground">Messages today</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
              <Smartphone className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <h3 className="font-semibold">SMS</h3>
              <p className="text-2xl font-bold mt-1">67</p>
              <p className="text-sm text-muted-foreground">Messages today</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;