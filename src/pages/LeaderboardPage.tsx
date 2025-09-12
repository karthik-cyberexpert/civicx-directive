import { Link } from "react-router-dom";
import { ArrowLeft, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Officer {
  id: string;
  name: string;
  rank: number;
  points: number;
  avatarUrl?: string;
}

const sampleOfficers: Officer[] = [
  { id: "1", name: "Officer Sharma", rank: 1, points: 1250, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=OS" },
  { id: "2", name: "Officer Khan", rank: 2, points: 1180, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=OK" },
  { id: "3", name: "Officer Patel", rank: 3, points: 1020, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=OP" },
  { id: "4", name: "Officer Singh", rank: 4, points: 980, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=OSi" },
  { id: "5", name: "Officer Gupta", rank: 5, points: 870, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=OG" },
];

const LeaderboardPage = () => {
  return (
    <>
      <header className="flex items-center p-4 border-b">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold ml-2">Leaderboard</h1>
      </header>
      <main className="p-6 space-y-4">
        {sampleOfficers.map((officer) => (
          <Card key={officer.id} className="shadow-sm">
            <CardContent className="flex items-center p-4">
              <span className="text-2xl font-bold text-gray-700 mr-4 w-8 text-center">
                {officer.rank}
              </span>
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={officer.avatarUrl} alt={officer.name} />
                <AvatarFallback>{officer.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{officer.name}</h2>
                <p className="text-sm text-gray-500">{officer.points} points</p>
              </div>
              {officer.rank <= 3 && (
                <Award className={`h-6 w-6 ${
                  officer.rank === 1 ? "text-yellow-500" :
                  officer.rank === 2 ? "text-gray-400" :
                  "text-amber-700"
                }`} />
              )}
            </CardContent>
          </Card>
        ))}
        <div className="pb-20 md:pb-0" />
      </main>
    </>
  );
};

export default LeaderboardPage;