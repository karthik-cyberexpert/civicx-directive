import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Issue {
  id: string;
  title: string;
  description: string;
  location: string;
  status: "Pending" | "In Progress" | "Resolved";
  reportedAt: string;
}

const sampleIssues: Issue[] = [
  {
    id: "1",
    title: "Large Pothole on Main Street",
    description: "There's a very large pothole near the intersection of Main St and Oak Ave, causing traffic hazards.",
    location: "Main St, near Oak Ave",
    status: "Pending",
    reportedAt: "2023-10-26T10:00:00Z",
  },
  {
    id: "2",
    title: "Broken Street Light",
    description: "Street light outside 123 Elm Street is not working, making the area dark at night.",
    location: "123 Elm St",
    status: "In Progress",
    reportedAt: "2023-10-25T14:30:00Z",
  },
  {
    id: "3",
    title: "Garbage Pile Up",
    description: "Illegal dumping has created a large pile of garbage behind the park.",
    location: "Behind Central Park",
    status: "Pending",
    reportedAt: "2023-10-24T08:15:00Z",
  },
  {
    id: "4",
    title: "Damaged Public Bench",
    description: "A public bench in the town square has been broken and is unsafe to use.",
    location: "Town Square",
    status: "Resolved",
    reportedAt: "2023-10-23T11:00:00Z",
  },
];

const IssuesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">Issues Received</h1>
        </header>
        <main className="p-6 space-y-4">
          {sampleIssues.map((issue) => (
            <Card key={issue.id} className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  {issue.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <p>{issue.description}</p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{issue.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Reported: {new Date(issue.reportedAt).toLocaleDateString()}</span>
                </div>
                <Badge
                  className={`mt-2 ${
                    issue.status === "Resolved"
                      ? "bg-green-500"
                      : issue.status === "In Progress"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  } text-white`}
                >
                  {issue.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
};

export default IssuesPage;