import StatCard from "@/components/dashboard/StatCard";
import IssuesChart from "@/components/dashboard/IssuesChart";
import ResolutionChart from "@/components/dashboard/ResolutionChart";
import { AlertTriangle, CheckCircle, List, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <StatCard
          title="Total Issues Reported"
          value="1,234"
          icon={List}
          variant="default"
        />
        <StatCard
          title="Issues Resolved"
          value="987"
          icon={CheckCircle}
          variant="success"
        />
        <StatCard
          title="Pending Issues"
          value="247"
          icon={AlertTriangle}
          variant="warning"
        />
        <StatCard
          title="Escalated Issues"
          value="56"
          icon={TrendingUp}
          variant="danger"
        />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <IssuesChart />
        <ResolutionChart />
      </div>
    </main>
  );
};

export default Index;