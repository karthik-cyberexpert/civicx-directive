import { Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/toast";
import { useUser } from "@/context/UserContext"; // Import useUser

const Footer = () => {
  const navigate = useNavigate();
  const { logout } = useUser(); // Use the logout function

  const handleLogout = () => {
    logout(); // Call the logout function from context
    showSuccess("You have been logged out successfully.");
    navigate("/");
  };

  return (
    <footer className="bg-white border-t p-2 flex justify-around items-center">
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