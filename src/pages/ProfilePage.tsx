import { Link } from "react-router-dom";
import { ArrowLeft, User as UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/context/UserContext";

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">Profile</h1>
        </header>
        <main className="p-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>
                <UserIcon className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">{user.name}</h2>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium">{user.email}</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Gender</span>
              <span className="font-medium">{user.gender}</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">State</span>
              <span className="font-medium">{user.state}</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Country</span>
              <span className="font-medium">{user.country}</span>
            </div>
            <Link to="/profile/edit" className="block w-full pt-6">
              <Button className="w-full">Edit Profile</Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;