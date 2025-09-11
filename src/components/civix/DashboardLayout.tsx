import BottomNav from "./BottomNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-full pb-16">
        {children}
      </div>
      <BottomNav />
    </div>
  );
};

export default DashboardLayout;