import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
        <div>
          <h1 className="text-lg font-bold text-gray-800 md:text-2xl">
            Water Supply Dept. Dashboard
          </h1>
          <p className="text-sm text-gray-500">Welcome, R. Kumar</p>
        </div>
      </div>
      <Button variant="outline" size="icon">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>
    </header>
  );
};

export default Header;