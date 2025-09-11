import { Award } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface AchievementItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  unlocked: boolean;
}

const AchievementItem = ({
  icon: Icon,
  title,
  description,
  unlocked,
}: AchievementItemProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-lg border p-4 transition-all",
        unlocked
          ? "border-green-200 bg-green-50"
          : "border-gray-200 bg-gray-50 opacity-60",
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full",
          unlocked ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-500",
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      {unlocked && <Award className="h-6 w-6 flex-shrink-0 text-yellow-500" />}
    </div>
  );
};

export default AchievementItem;