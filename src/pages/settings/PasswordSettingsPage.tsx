import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PasswordSettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/settings">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">Password</h1>
        </header>
        <main className="p-6 text-center">
          <p className="text-muted-foreground">
            Password management options will be available here soon.
          </p>
        </main>
      </div>
    </div>
  );
};

export default PasswordSettingsPage;