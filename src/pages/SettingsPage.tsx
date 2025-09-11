import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="flex items-center mb-4">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold ml-2">Settings</h1>
      </header>
      <main className="flex flex-col items-center pt-10">
        <p className="text-muted-foreground">Settings will be available here soon.</p>
      </main>
    </div>
  );
};

export default SettingsPage;