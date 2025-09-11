import Header from "@/components/cm-dashboard/Header";
import Footer from "@/components/cm-dashboard/Footer";
import KpiCard from "@/components/cm-dashboard/KpiCard";
import AlertBanner from "@/components/cm-dashboard/AlertBanner";
import DistrictHeatmap from "@/components/cm-dashboard/DistrictHeatmap";
import PerformanceChart from "@/components/cm-dashboard/PerformanceChart";
import Leaderboard from "@/components/cm-dashboard/Leaderboard";
import {
  ListChecks,
  Percent,
  AlertTriangle,
  Trophy,
  Users,
  Bell,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const citizenData = [
  { name: "Aarav Sharma", score: "1,250 pts" },
  { name: "Priya Patel", score: "1,180 pts" },
  { name: "Rohan Das", score: "1,120 pts" },
  { name: "Sneha Gupta", score: "1,050 pts" },
  { name: "Vikram Singh", score: "980 pts" },
];

const departmentData = [
  { name: "Public Works", score: "98% Resolved" },
  { name: "Sanitation", score: "95% Resolved" },
  { name: "Water Supply", score: "92% Resolved" },
  { name: "Electricity", score: "88% Resolved" },
  { name: "Transport", score: "85% Resolved" },
];

const Index = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 space-y-6">
        {/* KPI Cards */}
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <KpiCard
            title="Total Issues Reported"
            value="1,23,456"
            icon={ListChecks}
          />
          <KpiCard title="% Issues Resolved" value="89.5%" icon={Percent} />
          <KpiCard
            title="Escalations Pending"
            value="128"
            icon={AlertTriangle}
          />
          <KpiCard
            title="Top Performing District"
            value="Central"
            icon={Trophy}
          />
          <KpiCard
            title="Citizen Engagement Score"
            value="4.8/5"
            icon={Users}
          />
        </section>

        {/* Notifications & Alerts */}
        <section className="space-y-4">
          <AlertBanner
            message="Urgent Escalation: Major water pipeline burst in South District requires immediate attention."
            variant="urgent"
            icon={Bell}
          />
          <AlertBanner
            message="Low Performance Alert: Rural District resolution rate has dropped by 15% this month."
            variant="warning"
            icon={AlertTriangle}
          />
          <AlertBanner
            message="Outstanding Citizen: Aarav Sharma has reported 50+ valid issues this year."
            variant="success"
            icon={CheckCircle}
          />
        </section>

        {/* Global Insights */}
        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Global Insights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DistrictHeatmap />
            <PerformanceChart />
            <Leaderboard title="Top 5 Active Citizens" data={citizenData} />
            <Leaderboard title="Top 5 Departments" data={departmentData} />
          </div>
        </section>

        {/* Placeholder Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Sub-Admin Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">This section is under construction.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Escalation Control Panel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">This section is under construction.</p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;