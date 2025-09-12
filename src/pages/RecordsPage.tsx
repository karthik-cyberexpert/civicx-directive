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
import { sampleIssues } from "@/data/issues";
import { format, getWeek, getYear } from "date-fns";

type FilterType = "day" | "week" | "month" | "year";

const RecordsPage = () => {
  const [filter, setFilter] = useState<FilterType>("day");

  const processData = () => {
    const resolvedIssues = sampleIssues.filter(
      (issue) => issue.status === "Resolved"
    );

    const groupedData = resolvedIssues.reduce((acc, issue) => {
      const date = new Date(issue.reportedAt);
      let key: string;

      switch (filter) {
        case "day":
          key = format(date, "MMM d"); // e.g., "Oct 23"
          break;
        case "week":
          key = `Week ${getWeek(date)}`;
          break;
        case "month":
          key = format(date, "MMMM"); // e.g., "October"
          break;
        case "year":
          key = getYear(date).toString();
          break;
        default:
          key = "";
          break;
      }

      if (key) {
        acc[key] = (acc[key] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(groupedData)
      .map(([name, issuesCleared]) => ({
        name,
        issuesCleared,
      }))
      .sort((a, b) => (new Date(a.name) > new Date(b.name) ? 1 : -1)); // Sort data chronologically
  };

  const data = processData();

  return (
    <>
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
              <Button variant={filter === "day" ? "default" : "outline"} onClick={() => setFilter("day")}>Day</Button>
              <Button variant={filter === "week" ? "default" : "outline"} onClick={() => setFilter("week")}>Week</Button>
              <Button variant={filter === "month" ? "default" : "outline"} onClick={() => setFilter("month")}>Month</Button>
              <Button variant={filter === "year" ? "default" : "outline"} onClick={() => setFilter("year")}>Year</Button>
            </div>
            <div className="h-80">
              {data.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" interval={0} />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="issuesCleared" fill="#8884d8" name="Issues Cleared" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No solved issues found for this period.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <div className="pb-20 md:pb-0" />
      </main>
    </>
  );
};

export default RecordsPage;