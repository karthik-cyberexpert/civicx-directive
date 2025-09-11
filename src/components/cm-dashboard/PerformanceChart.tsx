import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "North", performance: 92 },
  { name: "South", performance: 65 },
  { name: "East", performance: 88 },
  { name: "West", performance: 71 },
  { name: "Central", performance: 95 },
  { name: "Metro", performance: 85 },
  { name: "Rural", performance: 58 },
  { name: "Coastal", performance: 91 },
];

const PerformanceChart = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>District-wise Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} />
            <YAxis stroke="#888888" fontSize={12} />
            <Tooltip />
            <Bar dataKey="performance" fill="#2563eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;