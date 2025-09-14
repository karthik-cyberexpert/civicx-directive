import { Link } from "react-router-dom";
import { ArrowLeft, User as UserIcon, Settings, Edit, MapPin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/context/UserContext";

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/10 border-b border-white/20 p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-white">Department Profile</h1>
          </div>
          <Link to="/settings">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="p-6 space-y-6 animate-fade-in">
        {/* Profile Header */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 border-4 border-white/20 shadow-xl mb-4">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback className="bg-gradient-to-br from-blue-700 to-slate-700 text-white text-2xl">
                  <UserIcon className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              
              <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
              
              <Badge className="bg-gradient-to-r from-blue-700 to-slate-700 text-white border-0 mb-4">
                Department Administrator
              </Badge>
              
              <Link to="/profile/edit">
                <Button className="bg-gradient-to-r from-blue-700 to-slate-700 hover:from-blue-800 hover:to-slate-800 text-white border-0 transition-all duration-300">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div className="flex-grow">
                  <span className="text-gray-400 text-sm">Email</span>
                  <p className="font-medium text-white">{user.email}</p>
                </div>
              </div>
              
              <Separator className="bg-white/10" />
              
              <div className="flex items-center space-x-3">
                <UserIcon className="h-5 w-5 text-slate-400" />
                <div className="flex-grow">
                  <span className="text-gray-400 text-sm">Gender</span>
                  <p className="font-medium text-white">{user.gender}</p>
                </div>
              </div>
              
              <Separator className="bg-white/10" />
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <div className="flex-grow">
                  <span className="text-gray-400 text-sm">State</span>
                  <p className="font-medium text-white">{user.state}</p>
                </div>
              </div>
              
              <Separator className="bg-white/10" />
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <div className="flex-grow">
                  <span className="text-gray-400 text-sm">Country</span>
                  <p className="font-medium text-white">{user.country}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Statistics */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Department Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Issues Handled", value: "156", color: "from-blue-600 to-slate-600" },
                { label: "Issues Resolved", value: "142", color: "from-green-600 to-green-700" },
                { label: "Avg Resolution Time", value: "2.3 days", color: "from-slate-600 to-gray-700" },
                { label: "Satisfaction Rating", value: "4.8/5", color: "from-amber-600 to-orange-600" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <span className="text-white font-bold text-lg">{stat.value.slice(0, 1)}</span>
                  </div>
                  <p className="font-bold text-white">{stat.value}</p>
                  <p className="text-gray-300 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Add padding for mobile footer */}
        <div className="pb-32 md:pb-8"></div>
      </main>
    </div>
  );
};

export default ProfilePage;