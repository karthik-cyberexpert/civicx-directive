import { Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/toast";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear the user's session here.
    showSuccess("You have been logged out successfully.");
    navigate("/");
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around items-center z-10">
      <Link to="/settings" className="text-center">
        <Button variant="ghost" className="flex flex-col h-auto p-2 items-center">
          <Settings className="h-6 w-6 text-gray-600" />
          <span className="text-xs text-gray-600 mt-1">Settings</span>
        </Button>
      </Link>
      <Button
        variant="ghost"
        onClick={handleLogout}
        className="flex flex-col h-auto p-2 items-center"
      >
        <LogOut className="h-6 w-6 text-gray-600" />
        <span className="text-xs text-gray-600 mt-1">Log Out</span>
      </Button>
    </footer>
  );
};

export default Footer;