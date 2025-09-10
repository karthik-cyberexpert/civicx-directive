import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "danger";
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  variant = "default",
}: StatCardProps) => {
  const variantClasses = {
    default: "border-blue-500",
    success: "border-green-500",
    warning: "border-yellow-500",
    danger: "border-red-500",
  };

  return (
    <Card className={cn("border-l-4", variantClasses[variant])}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatCard;