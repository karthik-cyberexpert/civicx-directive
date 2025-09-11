import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentDate = new Date().toLocaleString();
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Button variant="link" className="text-white">Analytics</Button>
          <Button variant="link" className="text-white">Sub-Admin Control</Button>
          <Button variant="link" className="text-white">Escalations</Button>
          <Button variant="link" className="text-white">Rewards</Button>
        </div>
        <div className="text-center md:text-right">
          <p>{currentDate}</p>
          <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
            <Shield className="h-5 w-5" />
            <p className="font-semibold">Govt. of Nation | SIH Branding</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;