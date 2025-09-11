import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-center items-center z-10">
      <Link to="/settings">
        <Button variant="ghost" size="icon">
          <Settings className="h-6 w-6 text-gray-600" />
        </Button>
      </Link>
    </footer>
  );
};

export default Footer;