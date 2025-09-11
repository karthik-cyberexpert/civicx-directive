import DashboardLayout from "@/components/civix/DashboardLayout";
import HomeHeader from "@/components/civix/HomeHeader";
import AchievementCard from "@/components/civix/AchievementCard";
import TeamCard from "@/components/civix/TeamCard";
import {
  BookUser,
  MessageSquare,
  Users,
  Shield,
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="w-full max-w-md mx-auto p-4">
        <HomeHeader />
        <main className="space-y-6">
          {/* Achievements Section */}
          <section>
            <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
              Your Achievements
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <AchievementCard
                title="My Records"
                icon={BookUser}
                href="/records"
              />
              <AchievementCard
                title="Feedback"
                icon={MessageSquare}
                href="/achievements"
              />
            </div>
          </section>

          {/* Civix Team Section */}
          <section>
            <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
              Civix Team
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <TeamCard
                title="Reporters"
                icon={Users}
                href="/leaderboard"
              />
              <TeamCard
                title="Heroes"
                icon={Shield}
                href="/achievements"
              />
            </div>
          </section>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default Index;