import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const StatCard = ({ title, value, icon: Icon, color }: StatCardProps) => {
  return (
    <Card className="text-center">
      <CardContent className="flex flex-col items-center justify-center p-3">
        <Icon className={`mb-1 h-6 w-6 ${color}`} />
        <p className="text-xl font-bold">{value}</p>
        <p className="text-xs text-gray-500">{title}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;