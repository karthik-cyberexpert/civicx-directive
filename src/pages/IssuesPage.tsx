import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const IssuesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">Issues Overview</h1>
        </header>
        <main className="p-6 space-y-6 text-center">
          <p className="text-lg text-gray-700">
            All active and important issues are now displayed directly on the{" "}
            <Link to="/" className="text-blue-600 hover:underline font-semibold">
              Home Page
            </Link>
            .
          </p>
          <p className="text-md text-gray-600">
            You can view all resolved issues here:
          </p>
          <div className="flex flex-col items-center gap-4 mt-6">
            <Link to="/">
              <Button className="flex items-center gap-2">
                <Home className="h-4 w-4" /> Go to Home Page
              </Button>
            </Link>
            <Link to="/solved-issues">
              <Button variant="outline" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> View Solved Issues
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IssuesPage;