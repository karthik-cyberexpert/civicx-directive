import { Link, useLocation } from "react-router-dom";
import { Home, BookUser, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Footer = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { href: "/", icon: Home, label: "Dashboard" },
    { href: "/records", icon: BookUser, label: "Records" },
    { href: "/achievements", icon: Award, label: "Reports" },
    { href: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-4 mb-4">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-2 shadow-2xl">
          <div className="flex justify-around items-center">
            {navItems.map((item) => {
              const isItemActive = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex flex-col items-center transition-all duration-300 w-1/4 relative",
                    isItemActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {/* Active indicator */}
                  {isItemActive && (
                    <div className="absolute -top-1 w-12 h-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full"></div>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={cn(
                      "h-12 w-12 transition-all duration-300",
                      isItemActive 
                        ? "bg-gradient-to-br from-blue-600/20 to-slate-600/20 text-white shadow-lg" 
                        : "hover:bg-white/10"
                    )}
                  >
                    <item.icon className={cn(
                      "transition-all duration-300",
                      isItemActive ? "h-6 w-6" : "h-5 w-5"
                    )} />
                  </Button>
                  
                  <span className={cn(
                    "text-xs mt-1 transition-all duration-300",
                    isItemActive ? "font-semibold" : "font-normal"
                  )}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;