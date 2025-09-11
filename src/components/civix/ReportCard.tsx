import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ReportCardProps {
  title: string;
  description: string;
  status: "Approved" | "Pending" | "Rejected";
  date: string;
  progress: number;
}

const ReportCard = ({
  title,
  description,
  status,
  date,
  progress,
}: ReportCardProps) => {
  const statusClasses = {
    Approved: "bg-green-100 text-green-800 border-green-200",
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Rejected: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4 space-y-3">
        <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
          <span className="text-gray-200 font-semibold">{title}</span>
        </div>
        <Badge
          variant="outline"
          className={cn("font-semibold", statusClasses[status])}
        >
          {status.toUpperCase()}
        </Badge>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-gray-500 text-right">{date}</p>
      </CardContent>
    </Card>
  );
};

export default ReportCard;