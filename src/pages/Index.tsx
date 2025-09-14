import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/civix/Header";
import { MapPin, Clock, AlertCircle } from "lucide-react";
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
        return "bg-gradient-to-r from-red-500 to-red-600 text-white border-0";
      case "Medium":
        return "bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0";
      case "Low":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white border-0";
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0";
      case "In Progress":
        return "bg-gradient-to-r from-purple-500 to-violet-500 text-white border-0";
      default:
        return "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-6 space-y-6 animate-fade-in">
        {/* Department Greeting */}
        <section className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-400 via-slate-400 to-blue-600 bg-clip-text text-transparent">
              Department Dashboard
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Manage and resolve civic issues efficiently
          </p>
        </section>

        {/* Issues Display Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Priority Issues Requiring Attention</h2>
          {activeIssues.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeIssues.map((issue, index) => (
                <Card
                  key={issue.id}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 card-hover flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      {issue.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-gray-300 flex-grow">
                    <p>{issue.description}</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      <span>{issue.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-400" />
                      <span>Reported: {new Date(issue.reportedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className={getPriorityBadgeClass(issue.priority)}>
                        {issue.priority} Priority
                      </Badge>
                      <Badge className={getStatusBadgeClass(issue.status)}>
                        {issue.status}
                      </Badge>
                    </div>
                  </CardContent>
                  <div className="flex gap-2 mt-4 p-4 pt-2 border-t border-white/10">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAccept(issue.id)}
                      className="flex-1 border-white/20 text-white hover:bg-white/10"
                    >
                      Accept
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleImplement(issue.id)}
                      className="flex-1 bg-gradient-to-r from-blue-700 to-slate-700 hover:from-blue-800 hover:to-slate-800 text-white border-0"
                    >
                      Implement
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">All Issues Resolved</h3>
                  <p className="text-gray-300 text-lg">
                    No pending issues require department attention.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Add padding for mobile footer */}
        <div className="pb-20 md:pb-0"></div>
      </main>
    </div>
  );
};

export default Index;