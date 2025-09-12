import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/civix/Header";
import Footer from "@/components/civix/Footer"; // Import the new Footer component
import {
  ClipboardList,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden flex-grow">
        <Header />
        <main className="p-6 space-y-6 animate-in fade-in duration-500">
          {/* Greeting */}
          <section className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Hello Sir,</h1>
            <p className="text-gray-500 mt-1">Let's make our city better!</p>
          </section>

          {/* Issues Received Section - now primary */}
          <section className="flex flex-col gap-3">
            <Link to="/issues" className="w-full">
              <Button
                variant="outline"
                className="w-full h-14 text-lg border-gray-300 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 hover:text-white"
              >
                <ClipboardList className="mr-2 h-5 w-5" /> Issues received
              </Button>
            </Link>
          </section>

          {/* Placeholder for other content if needed, or just padding */}
          <div className="pb-20 md:pb-0"></div> {/* Add padding for mobile footer */}
        </main>
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default Index;