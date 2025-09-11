import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-2 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800 pl-4">Civix</h1>
      <Link to="/profile">
        <Button variant="ghost" size="icon">
          <User className="h-6 w-6 text-gray-600" />
        </Button>
      </Link>
    </header>
  );
};

export default Header;