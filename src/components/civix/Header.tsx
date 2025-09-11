import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3 md:hidden">
      <div>
        <h1 className="text-xl font-bold text-gray-800">Civix</h1>
        <p className="text-sm text-gray-500">R. Kumar, Water Supply Dept.</p>
      </div>
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default Header;