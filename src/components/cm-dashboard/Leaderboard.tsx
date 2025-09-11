import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Medal } from "lucide-react";

interface LeaderboardProps {
  title: string;
  data: { name: string; score: string }[];
}

const Leaderboard = ({ title, data }: LeaderboardProps) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Crown className="text-yellow-500" /> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {data.map((item, index) => (
            <li key={item.name} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Medal
                  className={
                    index === 0
                      ? "text-yellow-500"
                      : index === 1
                      ? "text-gray-400"
                      : index === 2
                      ? "text-orange-400"
                      : "text-gray-300"
                  }
                />
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="font-bold text-blue-700">{item.score}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;