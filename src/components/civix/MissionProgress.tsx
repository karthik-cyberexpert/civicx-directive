import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const MissionProgress = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          Next Goal: Resolve 10 issues this week
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Progress</span>
          <span>6/10</span>
        </div>
        <Progress value={60} className="mt-2" />
      </CardContent>
    </Card>
  );
};

export default MissionProgress;