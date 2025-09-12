import { User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-2 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800 pl-4">Civicx</h1>
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/settings">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-purple-600 hover:scale-110 hover:rotate-12"
              >
                <Settings className="h-6 w-6" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/profile">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-purple-600 hover:scale-110"
              >
                <User className="h-6 w-6" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Profile</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;