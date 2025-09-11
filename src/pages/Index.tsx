import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AchievementCard from "@/components/civix/AchievementCard";
import {
  BookUser,
  ClipboardList,
  Trophy,
  Medal,
  Star,
  MessageSquare,
  User,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <main className="w-full max-w-md p-6 space-y-6">
        {/* Greeting */}
        <section className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Hello Sir,</h1>
          <p className="text-gray-500 mt-1">Let's make our city better!</p>
        </section>

        {/* Navigation Options */}
        <section className="flex flex-col gap-3">
          <Link to="/issues" className="w-full">
            <Button className="w-full h-14 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-shadow">
              <ClipboardList className="mr-2 h-5 w-5" /> Reported Issues
            </Button>
          </Link>
          <Link to="/records" className="w-full">
            <Button
              variant="outline"
              className="w-full h-14 text-lg border-gray-300 bg-white"
            >
              <BookUser className="mr-2 h-5 w-5" /> My Records
            </Button>
          </Link>
          <Link to="/leaderboard" className="w-full">
            <Button
              variant="outline"
              className="w-full h-14 text-lg border-gray-300 bg-white"
            >
              <Trophy className="mr-2 h-5 w-5" /> Leader Board
            </Button>
          </Link>
        </section>

        {/* Achievements Section */}
        <section>
          <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
            Your Achievements
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <AchievementCard
              title="Reporter"
              icon={Medal}
              href="/achievements"
            />
            <AchievementCard title="Heroes" icon={Star} href="/achievements" />
            <AchievementCard
              title="Feedbacks"
              icon={MessageSquare}
              href="/achievements"
            />
          </div>
        </section>

        {/* Settings/Profile Button */}
        <section className="pt-4">
          <Link to="/settings" className="w-full">
            <Button
              variant="outline"
              className="w-full h-14 text-lg border-gray-300 bg-white"
            >
              <User className="mr-2 h-5 w-5" /> Settings & Profile
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Index;