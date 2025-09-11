import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Shield className="h-10 w-10 text-blue-800" />
        <h1 className="text-xl font-bold text-gray-800">
          Civic Issue Monitoring System
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">Analytics</Button>
          <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">Sub-Admin Control</Button>
          <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">Escalations</Button>
          <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">Rewards</Button>
        </nav>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Analytics</DropdownMenuItem>
              <DropdownMenuItem>Sub-Admin Control</DropdownMenuItem>
              <DropdownMenuItem>Escalations</DropdownMenuItem>
              <DropdownMenuItem>Rewards</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden sm:block text-lg text-gray-600 border-l pl-4 ml-2">
          Welcome, <span className="font-semibold">Hon. Chief Minister</span>
        </div>
      </div>
    </header>
  );
};

export default Header;