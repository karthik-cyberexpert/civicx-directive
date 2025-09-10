import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import StatCard from "@/components/dashboard/StatCard";
import IssuesChart from "@/components/dashboard/IssuesChart";
import ResolutionChart from "@/components/dashboard/ResolutionChart";
import { AlertTriangle, CheckCircle, List, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <StatCard title="Total Issues Reported" value="1,234" icon={List} />
            <StatCard title="Issues Resolved" value="987" icon={CheckCircle} />
            <StatCard title="Pending Issues" value="247" icon={AlertTriangle} />
            <StatCard title="Escalated Issues" value="56" icon={TrendingUp} />
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
            <IssuesChart />
            <ResolutionChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;