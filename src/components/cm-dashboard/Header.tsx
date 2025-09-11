import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Shield className="h-10 w-10 text-blue-800" />
        <h1 className="text-xl font-bold text-gray-800">
          Civic Issue Monitoring System
        </h1>
      </div>
      <div className="text-lg text-gray-600">
        Welcome, <span className="font-semibold">Hon. Chief Minister</span>
      </div>
    </header>
  );
};

export default Header;