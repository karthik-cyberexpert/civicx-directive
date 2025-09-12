import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sampleIssues } from "@/data/issues";

const SolvedIssuesPage = () => {
  const solvedIssues = sampleIssues.filter((issue) => issue.status === "Resolved");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">Solved Issues</h1>
        </header>
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solvedIssues.length > 0 ? (
            solvedIssues.map((issue) => (
              <Card
                key={issue.id}
                className="shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    {issue.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-600 flex-grow">
                  <p>{issue.description}</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{issue.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>Reported: {new Date(issue.reportedAt).toLocaleDateString()}</span>
                  </div>
                  <Badge className="mt-2 bg-green-500 text-white">
                    {issue.status}
                  </Badge>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg py-8">
              No solved issues to display yet!
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default SolvedIssuesPage;