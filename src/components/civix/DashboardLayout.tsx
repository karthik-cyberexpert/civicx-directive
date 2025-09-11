import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="w-full pb-16 md:pb-0">
        {children}
      </div>
      <BottomNav />
    </div>
  );
};

export default DashboardLayout;