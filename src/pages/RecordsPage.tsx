import { Link } from "react-router-dom";
import { useState } from "react";
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

const weekData = [
  { name: "Week 1", issuesCleared: 12 },
  { name: "Week 2", issuesCleared: 19 },
  { name: "Week 3", issuesCleared: 8 },
  { name: "Week 4", issuesCleared: 25 },
];

const monthData = [
  { name: "Jan", issuesCleared: 64 },
  { name: "Feb", issuesCleared: 78 },
  { name: "Mar", issuesCleared: 55 },
  { name: "Apr", issuesCleared: 89 },
  { name: "May", issuesCleared: 102 },
  { name: "Jun", issuesCleared: 95 },
];

const yearData = [
  { name: "2022", issuesCleared: 500 },
  { name: "2023", issuesCleared: 620 },
  { name: "2024", issuesCleared: 300 },
];

type FilterType = "week" | "month" | "year";

const RecordsPage = () => {
  const [filter, setFilter] = useState<FilterType>("week");

  const getData = () => {
    switch (filter) {
      case "month":
        return monthData;
      case "year":
        return yearData;
      case "week":
      default:
        return weekData;
    }
  };

  const data = getData();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden">
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
              <div className="flex justify-center gap-2 mb-4">
                <Button
                  variant={filter === "week" ? "default" : "outline"}
                  onClick={() => setFilter("week")}
                >
                  Week
                </Button>
                <Button
                  variant={filter === "month" ? "default" : "outline"}
                  onClick={() => setFilter("month")}
                >
                  Month
                </Button>
                <Button
                  variant={filter === "year" ? "default" : "outline"}
                  onClick={() => setFilter("year")}
                >
                  Year
                </Button>
              </div>
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
                    <XAxis dataKey="name" interval={0} />
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