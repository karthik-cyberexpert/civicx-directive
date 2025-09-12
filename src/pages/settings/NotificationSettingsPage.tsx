import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const NotificationSettingsPage = () => {
  return (
    <>
      <header className="flex items-center p-4 border-b">
        <Link to="/settings">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold ml-2">Notifications</h1>
      </header>
      <main className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="allow-notifications" className="text-base">Allow notifications</Label>
          <Switch id="allow-notifications" defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <Label htmlFor="lock-screen-notifications" className="text-base">Show notifications on lock screen</Label>
          <Switch id="lock-screen-notifications" />
        </div>
        <Separator />
        <div className="flex items-center space-x-2">
          <Checkbox id="remind-pop-up" />
          <Label htmlFor="remind-pop-up" className="text-base">Remind pop up</Label>
        </div>
        <div className="pb-20 md:pb-0" />
      </main>
    </>
  );
};

export default NotificationSettingsPage;