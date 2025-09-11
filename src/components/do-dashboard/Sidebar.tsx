import { BarChart, Bell, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "Jan", resolved: 86 },
  { month: "Feb", resolved: 88 },
  { month: "Mar", resolved: 90 },
  { month: "Apr", resolved: 92 },
  { month: "May", resolved: 91 },
  { month: "Jun", resolved: 93 },
];

const Sidebar = () => {
  return (
    <aside className="hidden w-72 flex-col border-r bg-gray-50 p-4 md:flex">
      <div className="flex-grow">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          Analytics & Reports
        </h2>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-base">Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={chartData}>
                  <XAxis
                    dataKey="month"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Bar
                    dataKey="resolved"
                    fill="var(--color-resolved)"
                    radius={4}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Avg. Resolution Time</p>
            <p className="text-2xl font-bold">48 Hours</p>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Department Points</p>
            <p className="text-2xl font-bold text-green-600">1,500</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-auto">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@officer" />
            <AvatarFallback>DO</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">R. Kumar</p>
            <p className="text-sm text-gray-500">Water Supply Dept.</p>
          </div>
        </div>
        <Button variant="ghost" className="mt-4 w-full justify-start gap-2">
          <LogOut className="h-4 w-4" /> Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;