import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const HelpPage = () => {
  return (
    <>
      <header className="flex items-center p-4 border-b">
        <Link to="/settings">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold ml-2">Help</h1>
      </header>
      <main className="p-6 prose max-w-none">
        <h2 className="text-xl font-semibold mb-2">How to use Civicx App</h2>
        <p>
          Welcome to Civicx! This app helps you report issues in your city and
          contribute to making it a better place.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-1">Reporting Issues</h3>
        <p>
          Navigate to the "Issues received" section from the homepage to see
          current issues or report a new one. Provide clear details and
          location for effective resolution.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-1">Leaderboard & Achievements</h3>
        <p>
          Check the "Leaderboard" to see top reporters and "Your Achievements"
          to track your contributions and feedback.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-1">Profile Management</h3>
        <p>
          Manage your personal information, including name, email, gender,
          state, and country, from your profile page.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-1">Settings</h3>
        <p>
          Adjust app settings like language and notification preferences.
          You can also find help and password options here.
        </p>
        <p className="mt-6">
          Thank you for being a part of the Civicx community!
        </p>
        <div className="pb-20 md:pb-0" />
      </main>
    </>
  );
};

export default HelpPage;