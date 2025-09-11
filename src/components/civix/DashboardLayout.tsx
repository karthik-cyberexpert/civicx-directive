import BottomNav from "./BottomNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow pb-16">{children}</div>
      <BottomNav />
    </div>
  );
};

export default DashboardLayout;