import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Water Supply Dept. Dashboard
        </h1>
        <p className="text-gray-500">Welcome, R. Kumar</p>
      </div>
      <Button variant="outline" size="icon">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>
    </header>
  );
};

export default Header;