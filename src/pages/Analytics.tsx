import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Phone, 
  MessageSquare,
  Calendar,
  Download,
  Filter,
  RefreshCw
} from "lucide-react";

const Analytics = () => {
  // Mock data for charts
  const callAnalytics = [
    { period: "Last 7 days", calls: 247, success: 187, failed: 60, avg_duration: "4:32" },
    { period: "Last 30 days", calls: 1156, success: 934, failed: 222, avg_duration: "4:18" },
    { period: "Last 90 days", calls: 3487, success: 2856, failed: 631, avg_duration: "4:25" },
  ];

  const conversionMetrics = [
    { metric: "Call to Booking", rate: "18.5%", change: "+2.3%" },
    { metric: "Lead to Customer", rate: "24.8%", change: "+5.1%" },
    { metric: "Email Response", rate: "67.3%", change: "-1.2%" },
    { metric: "SMS Response", rate: "89.7%", change: "+8.4%" },
  ];

  const topPerformers = [
    { agent: "AI Agent Alpha", calls: 156, success: 142, rate: "91.0%" },
    { agent: "AI Agent Beta", calls: 134, success: 118, rate: "88.1%" },
    { agent: "AI Agent Gamma", calls: 98, success: 84, rate: "85.7%" },
    { agent: "AI Agent Delta", calls: 87, success: 71, rate: "81.6%" },
  ];

  const recentInsights = [
    {
      title: "Peak Call Hours",
      insight: "Most successful calls happen between 10 AM - 2 PM",
      impact: "High",
      action: "Schedule more campaigns during peak hours"
    },
    {
      title: "Conversion Patterns",
      insight: "Follow-up calls within 24 hours increase conversion by 34%",
      impact: "High",
      action: "Implement automated follow-up sequences"
    },
    {
      title: "Channel Performance",
      insight: "WhatsApp has 23% higher engagement than SMS",
      impact: "Medium",
      action: "Shift more campaigns to WhatsApp"
    },
    {
      title: "Script Optimization",
      insight: "Shorter introductions improve call completion by 15%",
      impact: "Medium",
      action: "Update AI agent scripts"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive insights into your AI calling and communication performance.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Calls</p>
                    <p className="text-3xl font-bold">3,487</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +12.3%
                    </p>
                  </div>
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                    <p className="text-3xl font-bold">82.1%</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +5.7%
                    </p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg Duration</p>
                    <p className="text-3xl font-bold">4:25</p>
                    <p className="text-sm text-red-600 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1 rotate-180" />
                      -0:07
                    </p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Bookings</p>
                    <p className="text-3xl font-bold">645</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +18.5%
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call Analytics Over Time */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Call Performance Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {callAnalytics.map((period, index) => (
                  <div key={index} className="grid grid-cols-5 gap-4 p-4 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">{period.period}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{period.calls}</p>
                      <p className="text-xs text-muted-foreground">Total Calls</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{period.success}</p>
                      <p className="text-xs text-muted-foreground">Successful</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-red-600">{period.failed}</p>
                      <p className="text-xs text-muted-foreground">Failed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{period.avg_duration}</p>
                      <p className="text-xs text-muted-foreground">Avg Duration</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Conversion Metrics */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Conversion Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversionMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{metric.metric}</p>
                        <p className="text-2xl font-bold text-primary">{metric.rate}</p>
                      </div>
                      <Badge variant={metric.change.startsWith('+') ? "default" : "destructive"}>
                        {metric.change}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Performing AI Agents */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>AI Agent Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((agent, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                          #{index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{agent.agent}</p>
                          <p className="text-sm text-muted-foreground">{agent.calls} calls</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{agent.rate}</p>
                        <p className="text-sm text-muted-foreground">{agent.success}/{agent.calls}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                AI-Generated Insights
              </CardTitle>
              <p className="text-muted-foreground">
                Automated insights and recommendations based on your data patterns.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentInsights.map((insight, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{insight.title}</h3>
                        <Badge variant={
                          insight.impact === "High" ? "destructive" :
                          insight.impact === "Medium" ? "default" : "secondary"
                        } className="mt-1">
                          {insight.impact} Impact
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{insight.insight}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-primary">
                        💡 Recommendation: {insight.action}
                      </p>
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Daily Performance Report", description: "Daily summary of calls and conversions", schedule: "Daily at 9 AM" },
              { name: "Weekly Analytics Summary", description: "Comprehensive weekly performance analysis", schedule: "Mondays at 8 AM" },
              { name: "Monthly Business Review", description: "Complete monthly business metrics", schedule: "1st of each month" },
              { name: "AI Agent Performance", description: "Individual AI agent performance metrics", schedule: "Weekly" },
              { name: "CRM Integration Report", description: "Data sync and CRM integration status", schedule: "Daily" },
              { name: "Communication Channel Report", description: "Multi-channel communication analytics", schedule: "Weekly" },
            ].map((report, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{report.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium">Schedule:</span> {report.schedule}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Generate Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;