import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">Settings</h1>
        </header>
        <main className="p-6">
          <div className="space-y-4">
            <Link 
              to="/settings/language" 
              className="flex items-center justify-between py-3 px-2 rounded-md transition-all duration-200 hover:bg-gray-100 hover:translate-x-1"
            >
              <span className="text-lg font-medium">Language</span>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </Link>
            <Separator />
            <Link 
              to="/settings/notifications" 
              className="flex items-center justify-between py-3 px-2 rounded-md transition-all duration-200 hover:bg-gray-100 hover:translate-x-1"
            >
              <span className="text-lg font-medium">Notifications</span>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </Link>
            <Separator />
            <Link 
              to="/settings/password" 
              className="flex items-center justify-between py-3 px-2 rounded-md transition-all duration-200 hover:bg-gray-100 hover:translate-x-1"
            >
              <span className="text-lg font-medium">Password</span>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </Link>
            <Separator />
            <Link 
              to="/settings/help" 
              className="flex items-center justify-between py-3 px-2 rounded-md transition-all duration-200 hover:bg-gray-100 hover:translate-x-1"
            >
              <span className="text-lg font-medium">Help</span>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;