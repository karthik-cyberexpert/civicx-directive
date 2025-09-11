import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface AchievementCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
}

const AchievementCard = ({ title, icon: Icon, href }: AchievementCardProps) => {
  return (
    <Link to={href} className="block text-center">
      <Card className="bg-green-50 border-green-400 border-2 transition-transform hover:scale-105">
        <CardContent className="flex flex-col items-center justify-center gap-2 p-4 h-full">
          <Icon className="h-8 w-8 text-green-600" />
          <p className="text-sm font-semibold text-gray-700">{title}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AchievementCard;