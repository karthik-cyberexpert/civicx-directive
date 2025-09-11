import DashboardLayout from "@/components/civix/DashboardLayout";
import PageLayout from "@/components/civix/PageLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Trophy,
  HelpCircle,
  PenSquare,
  CheckCircle,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const contributors = [
  { rank: 1, name: "Sarah Chen", points: 456, initials: "SC", tier: "Gold" },
  { rank: 2, name: "Mike Johnson", points: 389, initials: "MJ", tier: "Silver" },
  { rank: 3, name: "Priya Patel", points: 321, initials: "PP", tier: "Bronze" },
  { rank: 4, name: "David Kim", points: 298, initials: "DK" },
  { rank: 5, name: "Alex Smith (You)", points: 125, initials: "AS", isCurrentUser: true },
  { rank: 6, name: "Emma Wilson", points: 98, initials: "EW" },
  { rank: 7, name: "James Brown", points: 87, initials: "JB" },
  { rank: 8, name: "Lisa Garcia", points: 76, initials: "LG" },
];

const tierStyles = {
  Gold: "bg-yellow-400 text-yellow-900",
  Silver: "bg-slate-300 text-slate-800",
  Bronze: "bg-orange-400 text-orange-900",
};

const Leaderboard = () => {
  return (
    <DashboardLayout>
      <PageLayout title="Leaderboard" subtitle="Top community heroes">
        <div className="space-y-6">
          {/* Your Rank Card */}
          <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white text-center shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg font-medium opacity-90">Your Rank</p>
              <p className="text-6xl font-bold my-2">#5</p>
              <p className="opacity-90">Keep reporting to climb higher!</p>
            </CardContent>
          </Card>

          {/* Top Contributors List */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4">
              <Trophy className="text-yellow-500" /> Top Contributors
            </h2>
            <div className="space-y-3">
              {contributors.map((user) => (
                <Card
                  key={user.rank}
                  className={cn(
                    "transition-all",
                    user.isCurrentUser && "border-2 border-purple-500 shadow-md"
                  )}
                >
                  <CardContent className="p-3 flex items-center gap-4">
                    <div className="text-lg font-bold text-gray-500 w-8 text-center">
                      {user.rank <= 3 ? (
                        <Trophy
                          className={cn(
                            "h-6 w-6 mx-auto",
                            user.tier === "Gold" && "text-yellow-500",
                            user.tier === "Silver" && "text-slate-400",
                            user.tier === "Bronze" && "text-orange-500"
                          )}
                        />
                      ) : (
                        `#${user.rank}`
                      )}
                    </div>
                    <Avatar>
                      <AvatarFallback className="bg-purple-100 text-purple-700 font-bold">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.points} points</p>
                    </div>
                    {user.tier && (
                      <Badge className={cn("font-bold", tierStyles[user.tier])}>
                        {user.tier}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How to Earn Points Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <HelpCircle className="text-purple-600" /> How to Earn Points
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-600">
              <div className="flex items-center gap-3">
                <PenSquare className="h-5 w-5 text-blue-500" />
                <p>Report an issue: <span className="font-semibold">25 points</span></p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <p>Verified report: <span className="font-semibold">+15 points</span></p>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-orange-500" />
                <p>Issue resolved: <span className="font-semibold">+10 points</span></p>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-purple-500" />
                <p>Complete verification: <span className="font-semibold">+50 points</span></p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Button */}
          <Link to="/issues">
            <Button size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-shadow">
              <PenSquare className="mr-2" /> Report Issue & Earn Points
            </Button>
          </Link>
        </div>
      </PageLayout>
    </DashboardLayout>
  );
};

export default Leaderboard;