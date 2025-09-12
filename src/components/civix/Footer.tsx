import { Link } from "react-router-dom";
import { Trophy, BookUser, MessageSquare, CheckCircle } from "lucide-react"; // Import CheckCircle icon
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-2 border-t border-gray-200 flex justify-around items-center z-50">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to="/records" className="flex flex-col items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <BookUser className="h-6 w-6" />
            </Button>
            <span className="text-xs mt-1">Records</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>My Records</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link to="/leaderboard" className="flex flex-col items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Trophy className="h-6 w-6" />
            </Button>
            <span className="text-xs mt-1">Leaderboard</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Leaderboard</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link to="/achievements" className="flex flex-col items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <MessageSquare className="h-6 w-6" />
            </Button>
            <span className="text-xs mt-1">Feedback</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Feedback</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link to="/solved-issues" className="flex flex-col items-center text-gray-600 hover:text-purple-600 transition-colors duration-200">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <CheckCircle className="h-6 w-6" />
            </Button>
            <span className="text-xs mt-1">Solved</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Solved Issues</p>
        </TooltipContent>
      </Tooltip>
    </footer>
  );
};

export default Footer;