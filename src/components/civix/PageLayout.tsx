import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, subtitle, children }: PageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 pb-6 shadow-md">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10 hover:bg-white/20"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm opacity-90">{subtitle}</p>
          </div>
        </div>
      </header>
      <main className="p-4 -mt-6">{children}</main>
    </div>
  );
};

export default PageLayout;