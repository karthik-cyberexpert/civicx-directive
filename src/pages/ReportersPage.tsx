import { Link } from "react-router-dom";
import { ArrowLeft, User as UserIcon, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Reporter {
  id: string;
  name: string;
  email: string;
  issuesReported: number;
  location: string;
  avatarUrl?: string;
}

const sampleReporters: Reporter[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", issuesReported: 15, location: "New Delhi", avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=AJ" },
  { id: "2", name: "Bob Williams", email: "bob@example.com", issuesReported: 10, location: "Mumbai", avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=BW" },
  { id: "3", name: "Charlie Brown", email: "charlie@example.com", issuesReported: 8, location: "Bengaluru", avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=CB" },
  { id: "4", name: "Diana Prince", email: "diana@example.com", issuesReported: 7, location: "Chennai", avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=DP" },
  { id: "5", name: "Eve Adams", email: "eve@example.com", issuesReported: 5, location: "Kolkata", avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=EA" },
];

const ReportersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">Reporters</h1>
        </header>
        <main className="p-6 space-y-4">
          {sampleReporters.map((reporter) => (
            <Card key={reporter.id} className="shadow-sm">
              <CardContent className="flex items-center p-4">
                <Avatar className="h-14 w-14 mr-4">
                  <AvatarImage src={reporter.avatarUrl} alt={reporter.name} />
                  <AvatarFallback>
                    <UserIcon className="h-7 w-7" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <h2 className="text-lg font-semibold">{reporter.name}</h2>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Mail className="h-4 w-4 text-gray-500" /> {reporter.email}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-gray-500" /> {reporter.location}
                  </p>
                  <p className="text-sm text-gray-500">Issues Reported: {reporter.issuesReported}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
};

export default ReportersPage;