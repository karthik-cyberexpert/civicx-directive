import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/civix/Header";
import Footer from "@/components/civix/Footer";
import { MapPin, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sampleIssues, handleAccept, handleImplement } from "@/data/issues";

const Index = () => {
  const priorityOrder = { "High": 1, "Medium": 2, "Low": 3 };

  const activeIssues = sampleIssues
    .filter((issue) => issue.status === "Pending" || issue.status === "In Progress")
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  const getPriorityBadgeClass = (priority: "High" | "Medium" | "Low") => {
    switch (priority) {
      case "High":
        return "bg-red-600";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden flex-grow">
        <Header />
        <main className="p-6 space-y-6 animate-in fade-in duration-500">
          {/* Greeting */}
          <section className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Hello Sir,</h1>
            <p className="text-gray-500 mt-1">Let's make our city better!</p>
          </section>

          {/* Issues Display Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Important Issues</h2>
            {activeIssues.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeIssues.map((issue) => (
                  <Card
                    key={issue.id}
                    className="shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col"
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-500" />
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
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={`${getPriorityBadgeClass(issue.priority)} text-white`}>
                          {issue.priority} Priority
                        </Badge>
                        <Badge
                          className={`${
                            issue.status === "Resolved"
                              ? "bg-green-500"
                              : issue.status === "In Progress"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          } text-white`}
                        >
                          {issue.status}
                        </Badge>
                      </div>
                    </CardContent>
                    <div className="flex gap-2 mt-4 p-4 pt-2 border-t border-gray-100">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAccept(issue.id)}
                        className="flex-1"
                      >
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleImplement(issue.id)}
                        className="flex-1"
                      >
                        Implement
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-lg py-8">
                No active issues to display. Great job!
              </p>
            )}
          </section>

          {/* Add padding for mobile footer */}
          <div className="pb-20 md:pb-0"></div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;