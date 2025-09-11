import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface NavOptionCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
}

const NavOptionCard = ({ title, icon: Icon, href }: NavOptionCardProps) => {
  return (
    <Link to={href} className="block">
      <Card className="h-full transition-colors hover:bg-gray-100">
        <CardContent className="flex h-full flex-col items-center justify-center gap-2 p-3 text-center">
          <Icon className="h-7 w-7 text-primary" />
          <p className="text-xs font-medium">{title}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NavOptionCard;