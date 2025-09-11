import BottomNav from "@/components/civix/BottomNav";
import NavOptionCard from "@/components/civix/NavOptionCard";
import AchievementsToggle from "@/components/civix/AchievementsToggle";
import { Button } from "@/components/ui/button";
import { Settings, BookUser, ClipboardList, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 pb-20">
      {/* Custom Header */}
      <header className="flex items-center justify-between border-b p-3">
        <div className="w-10" /> {/* Spacer */}
        <h1 className="text-center text-xl font-bold text-gray-800">CIVIX</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </header>

      <main className="flex-1 space-y-4 overflow-y-auto p-3">
        {/* Encouraging Prompt */}
        <section className="text-center">
          <p className="italic text-gray-600">
            "Let's build a better tomorrow for our citizens, one resolved issue
            at a time."
          </p>
        </section>

        {/* Greeting and Main Section */}
        <section>
          <h2 className="text-2xl font-semibold">Hello Sir,</h2>
          <p className="text-md text-gray-500">Progress Civilization</p>
        </section>

        {/* Navigation Options */}
        <section className="grid grid-cols-3 gap-3">
          <NavOptionCard title="My Records" icon={BookUser} href="/records" />
          <NavOptionCard
            title="Reported Issues"
            icon={ClipboardList}
            href="/issues"
          />
          <NavOptionCard
            title="Leader Board"
            icon={Trophy}
            href="/leaderboard"
          />
        </section>

        {/* Achievements Section */}
        <section>
          <AchievementsToggle />
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;