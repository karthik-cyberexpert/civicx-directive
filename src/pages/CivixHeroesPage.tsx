import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Hero {
  id: string;
  serialNo: number;
  name: string;
  department: string;
  contact: string;
  email: string;
  avatarUrl: string;
}

const sampleHeroes: Hero[] = [
  {
    id: "1",
    serialNo: 1,
    name: "Anjali Sharma",
    department: "Public Works",
    contact: "+91 98765 43210",
    email: "anjali.s@civix.gov",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=AS",
  },
  {
    id: "2",
    serialNo: 2,
    name: "Vikram Singh",
    department: "Sanitation",
    contact: "+91 98765 43211",
    email: "vikram.s@civix.gov",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=VS",
  },
  {
    id: "3",
    serialNo: 3,
    name: "Priya Patel",
    department: "Electrical Dept.",
    contact: "+91 98765 43212",
    email: "priya.p@civix.gov",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=PP",
  },
  {
    id: "4",
    serialNo: 4,
    name: "Rohan Mehra",
    department: "Water Supply",
    contact: "+91 98765 43213",
    email: "rohan.m@civix.gov",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=RM",
  },
];

const CivixHeroesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">Heroes</h1>
        </header>
        <main className="p-6 space-y-4">
          {sampleHeroes.map((hero) => (
            <Card key={hero.id} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex items-center p-4 gap-4">
                <span className="text-xl font-bold text-gray-500 w-6 text-center">
                  {hero.serialNo}
                </span>
                <Avatar className="h-14 w-14">
                  <AvatarImage src={hero.avatarUrl} alt={hero.name} />
                  <AvatarFallback>
                    {hero.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <h2 className="text-lg font-semibold text-gray-800">{hero.name}</h2>
                  <p className="text-sm text-gray-600">{hero.department}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Phone className="h-3 w-3" />
                    <span>{hero.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Mail className="h-3 w-3" />
                    <span>{hero.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
};

export default CivixHeroesPage;