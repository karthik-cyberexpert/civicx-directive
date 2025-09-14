import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="backdrop-blur-md bg-white/10 border-b border-white/20 p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-slate-300 bg-clip-text text-transparent">
              Department Portal
            </h1>
            <p className="text-xs text-gray-400">Civic Issue Management</p>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center space-x-3">
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search issues..."
              className="pl-10 w-64 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all"
            />
          </div>
          
          {/* Notification Button */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;