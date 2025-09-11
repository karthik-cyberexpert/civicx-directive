import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const Achievements = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="mb-2 text-sm font-medium text-gray-600">Badges Earned</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">🚀 Quick Resolver</Badge>
            <Badge variant="secondary">💖 Citizen Hero</Badge>
            <Badge variant="secondary">✅ 100+ Resolved</Badge>
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600">
            Citizen Feedback
          </p>
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            <Star className="h-5 w-5 text-gray-300" />
            <span className="ml-2 text-sm text-gray-500">(4.2 from 212 reviews)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;