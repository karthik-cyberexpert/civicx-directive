import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface AchievementCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
  description?: string;
  gradient?: string;
  count?: number;
}

const AchievementCard = ({ 
  title, 
  icon: Icon, 
  href, 
  description, 
  gradient = "from-green-500 to-emerald-500",
  count 
}: AchievementCardProps) => {
  return (
    <Link to={href} className="block">
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 card-hover group overflow-hidden">
        <CardContent className="p-6">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
            <div className={`w-full h-full bg-gradient-to-br ${gradient}`}></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-3">
            {/* Icon with gradient background */}
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-xl transform transition-transform duration-300 group-hover:scale-110`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            
            {/* Title */}
            <h3 className="font-bold text-white text-lg group-hover:text-white transition-colors">
              {title}
            </h3>
            
            {/* Description */}
            {description && (
              <p className="text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            )}
            
            {/* Count badge */}
            {count !== undefined && (
              <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-semibold`}>
                {count} earned
              </div>
            )}
            
            {/* Hover indicator */}
            <div className="w-0 group-hover:w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-300"></div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AchievementCard;