import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AchievementCard from "@/components/civix/AchievementCard";
import Header from "@/components/civix/Header";
import {
  BookUser,
  ClipboardList,
  Trophy,
  MessageSquare,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-md mx-auto bg-white">
        <Header />
        <main className="p-6 space-y-6 animate-in fade-in duration-500">
          {/* Greeting */}
          <section className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Hello Sir,</h1>
            <p className="text-gray-500 mt-1">Let's make our city better!</p>
          </section>

          {/* Navigation Options */}
          <section className="flex flex-col gap-3">
            <Link to="/issues" className="w-full">
              <Button
                variant="outline"
                className="w-full h-14 text-lg border-gray-300 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 hover:text-white"
              >
                <ClipboardList className="mr-2 h-5 w-5" /> Issues received
              </Button>
            </Link>
            <Link to="/leaderboard" className="w-full">
              <Button
                variant="outline"
                className="w-full h-14 text-lg border-gray-300 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 hover:text-white"
              >
                <Trophy className="mr-2 h-5 w-5" /> Leaderboard
              </Button>
            </Link>
          </section>

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
        </main>
      </div>
    </div>
  );
};

export default Index;