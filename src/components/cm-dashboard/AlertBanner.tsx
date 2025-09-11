import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface AlertBannerProps {
  message: string;
  icon: LucideIcon;
  variant: "urgent" | "warning" | "success";
}

const AlertBanner = ({ message, icon: Icon, variant }: AlertBannerProps) => {
  const variants = {
    urgent: "bg-red-100 border-red-500 text-red-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    success: "bg-green-100 border-green-500 text-green-800",
  };

  return (
    <div
      className={cn(
        "p-4 border-l-4 flex items-center gap-4 rounded-md shadow-sm",
        variants[variant]
      )}
    >
      <Icon className="h-6 w-6" />
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default AlertBanner;