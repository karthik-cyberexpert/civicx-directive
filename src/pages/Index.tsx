import Header from "@/components/do-dashboard/Header";
import Sidebar from "@/components/do-dashboard/Sidebar";
import StatCard from "@/components/do-dashboard/StatCard";
import IssueList from "@/components/do-dashboard/IssueList";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpCircle,
} from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6">
          {/* Quick Stats */}
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Pending Issues"
              value="42"
              icon={Clock}
              color="text-yellow-500"
            />
            <StatCard
              title="In-progress Issues"
              value="18"
              icon={AlertCircle}
              color="text-blue-500"
            />
            <StatCard
              title="Resolved Issues"
              value="256"
              icon={CheckCircle2}
              color="text-green-500"
            />
            <StatCard
              title="Escalated Issues"
              value="5"
              icon={ArrowUpCircle}
              color="text-red-500"
            />
          </section>

          {/* Issue List */}
          <section className="mt-6">
            <IssueList />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;