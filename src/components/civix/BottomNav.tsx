import { Home, ListChecks, Star, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/issues", label: "Issues", icon: ListChecks },
  { href: "/achievements", label: "Achievements", icon: Star },
  { href: "/settings", label: "Settings", icon: Settings },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white shadow-t-md">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center gap-1 text-gray-500",
                isActive && "text-primary"
              )
            }
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;