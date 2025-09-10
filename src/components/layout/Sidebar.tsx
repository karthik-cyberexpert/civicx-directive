import { NavLink } from "react-router-dom";
import {
  Home,
  Map,
  ListChecks,
  BarChart2,
  Users,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
      isActive ? "bg-muted text-primary" : "text-muted-foreground"
    );

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <ListChecks className="h-6 w-6" />
            <span>Citizen-Issue</span>
          </NavLink>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavLink to="/" end className={navLinkClass}>
              <Home className="h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink to="/map" className={navLinkClass}>
              <Map className="h-4 w-4" />
              Interactive Map
            </NavLink>
            <NavLink to="/issues" className={navLinkClass}>
              <ListChecks className="h-4 w-4" />
              Issues
            </NavLink>
            <NavLink to="/analytics" className={navLinkClass}>
              <BarChart2 className="h-4 w-4" />
              Analytics
            </NavLink>
            <NavLink to="/users" className={navLinkClass}>
              <Users className="h-4 w-4" />
              Users
            </NavLink>
            <NavLink to="/settings" className={navLinkClass}>
              <Settings className="h-4 w-4" />
              Settings
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;