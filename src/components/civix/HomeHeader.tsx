import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeHeader = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Hello Sir,</h1>
        <p className="text-gray-500 mt-1">Let's make our city better!</p>
      </div>
      <Link to="/settings">
        <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
          <User className="h-6 w-6" />
        </Button>
      </Link>
    </header>
  );
};

export default HomeHeader;