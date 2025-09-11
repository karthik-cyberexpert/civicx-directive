import { Home, ListChecks, Star, Settings, BookUser, Trophy } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/issues", label: "Issues", icon: ListChecks },
  { href: "/achievements", label: "Achievements", icon: Star },
  { href: "/records", label: "My Records", icon: BookUser },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/settings", label: "Settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="hidden w-64 flex-shrink-0 flex-col border-r bg-white p-4 md:flex">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Civix</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            end={item.href === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md p-3 text-gray-600 hover:bg-gray-100",
                isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;