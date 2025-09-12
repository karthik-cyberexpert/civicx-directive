import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

interface AchievementsBarChartProps {
  data: { name: string; "Completed Issues": number }[];
  timeFilter: "daily" | "weekly" | "monthly" | "yearly";
}

const AchievementsBarChart = ({ data, timeFilter }: AchievementsBarChartProps) => {
  // The getXAxisLabel function is no longer needed as labels are pre-formatted.

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis
            dataKey="name"
            tickFormatter={(value) => value} // Labels are now pre-formatted by getChartData
            angle={-45}
            textAnchor="end"
            height={80}
            interval={0}
            style={{ fontSize: '0.75rem' }}
          />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Completed Issues" fill="#8884d8" name="Completed Issues" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AchievementsBarChart;