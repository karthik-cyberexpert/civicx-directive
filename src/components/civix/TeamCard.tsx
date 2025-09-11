import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface TeamCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
}

const TeamCard = ({ title, icon: Icon, href }: TeamCardProps) => {
  return (
    <Link to={href} className="block text-center">
      <Card className="bg-purple-50 border-purple-400 border-2 transition-transform hover:scale-105">
        <CardContent className="flex flex-col items-center justify-center gap-2 p-4 h-full">
          <Icon className="h-8 w-8 text-purple-600" />
          <p className="text-sm font-semibold text-gray-700">{title}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TeamCard;