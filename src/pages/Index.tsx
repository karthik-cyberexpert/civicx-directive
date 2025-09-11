import Header from "@/components/civix/Header";
import StatCard from "@/components/civix/StatCard";
import BottomNav from "@/components/civix/BottomNav";
import MissionProgress from "@/components/civix/MissionProgress";
import Achievements from "@/components/civix/Achievements";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpCircle,
  Award,
} from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 pb-20">
      <Header />
      <main className="flex-1 space-y-6 overflow-y-auto p-4">
        {/* Quick Stats */}
        <section>
          <h2 className="mb-2 text-sm font-semibold text-gray-600">
            Quick Stats
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              title="Pending Issues"
              value="42"
              icon={Clock}
              color="text-yellow-500"
            />
            <StatCard
              title="In-progress"
              value="18"
              icon={AlertCircle}
              color="text-blue-500"
            />
            <StatCard
              title="Resolved"
              value="256"
              icon={CheckCircle2}
              color="text-green-500"
            />
            <StatCard
              title="Escalated"
              value="5"
              icon={ArrowUpCircle}
              color="text-red-500"
            />
          </div>
        </section>

        {/* Department Score */}
        <section>
           <StatCard
              title="Department Score"
              value="1,500"
              icon={Award}
              color="text-indigo-500"
            />
        </section>

        {/* Mission / Targets */}
        <section>
          <MissionProgress />
        </section>

        {/* Achievements */}
        <section>
          <Achievements />
        </section>
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;