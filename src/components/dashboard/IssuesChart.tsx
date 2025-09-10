import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 500) + 100 },
  { name: "Feb", total: Math.floor(Math.random() * 500) + 100 },
  { name: "Mar", total: Math.floor(Math.random() * 500) + 100 },
  { name: "Apr", total: Math.floor(Math.random() * 500) + 100 },
  { name: "May", total: Math.floor(Math.random() * 500) + 100 },
  { name: "Jun", total: Math.floor(Math.random() * 500) + 100 },
  { name: "Jul", total: Math.floor(Math.random() * 500) + 100 },
  { name: "Aug", total: Math.floor(Math.random() * 500) + 100 },
  { name: "Sep", total: Math.floor(Math.random() * 500) + 100 },
  { name: "Oct", total: Math.floor(Math.random() * 500) + 100 },
  { name: "Nov", total: Math.floor(Math.random() * 500) + 100 },
  { name: "Dec", total: Math.floor(Math.random() * 500) + 100 },
];

const IssuesChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Issues Reported (Monthly)</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
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
              tickFormatter={(value) => `${value}`}
            />
            <Bar dataKey="total" fill="#1e293b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default IssuesChart;