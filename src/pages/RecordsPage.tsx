import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", issuesCleared: 12 },
  { name: "Week 2", issuesCleared: 19 },
  { name: "Week 3", issuesCleared: 8 },
  { name: "Week 4", issuesCleared: 25 },
  { name: "Month 1", issuesCleared: 64 },
  { name: "Month 2", issuesCleared: 78 },
  { name: "Month 3", issuesCleared: 55 },
  { name: "Year 2022", issuesCleared: 500 },
  { name: "Year 2023", issuesCleared: 620 },
  { name: "Year 2024", issuesCleared: 300 }, // Partial year
];

const RecordsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">My Records</h1>
        </header>
        <main className="p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issues Cleared Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 10,
                      left: 10,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} interval={0} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="issuesCleared" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-gray-600 text-center">
            This chart shows the number of issues you've cleared over different periods.
          </p>
        </main>
      </div>
    </div>
  );
};

export default RecordsPage;