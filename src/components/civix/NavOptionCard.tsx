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
      <Card className="transition-colors hover:bg-gray-100">
        <CardContent className="flex items-center gap-4 p-4">
          <Icon className="h-8 w-8 text-primary" />
          <p className="text-base font-semibold">{title}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NavOptionCard;