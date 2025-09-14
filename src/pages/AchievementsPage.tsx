import { Link } from "react-router-dom";
import { ArrowLeft, Star, MessageSquare, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Feedback {
  id: string;
  citizenName: string;
  rating: number;
  comment: string;
  date: string;
  issueType: string;
}

const sampleFeedback: Feedback[] = [
  {
    id: "1",
    citizenName: "Priya Sharma",
    rating: 5,
    comment: "Excellent work on the pothole repair! The road is much smoother now. Thank you!",
    date: "2023-10-28",
    issueType: "Road Maintenance"
  },
  {
    id: "2",
    citizenName: "Rahul Verma",
    rating: 4,
    comment: "The street light was fixed quickly. Appreciate the prompt response.",
    date: "2023-10-27",
    issueType: "Street Lighting"
  },
  {
    id: "3",
    citizenName: "Sneha Reddy",
    rating: 5,
    comment: "Very impressed with the cleanliness drive. Our neighborhood looks much better.",
    date: "2023-10-26",
    issueType: "Sanitation"
  },
  {
    id: "4",
    citizenName: "Amit Kumar",
    rating: 3,
    comment: "The issue was resolved, but it took a bit longer than expected.",
    date: "2023-10-25",
    issueType: "Water Supply"
  },
  {
    id: "5",
    citizenName: "Maya Patel",
    rating: 5,
    comment: "Outstanding response time for the drainage issue. Professional work!",
    date: "2023-10-24",
    issueType: "Drainage"
  },
  {
    id: "6",
    citizenName: "Suresh Singh",
    rating: 4,
    comment: "Good coordination between departments. Keep up the good work.",
    date: "2023-10-23",
    issueType: "Multi-Department"
  },
];

const AchievementsPage = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-600"}`}
        fill={i < rating ? "currentColor" : "none"}
      />
    ));
  };

  const sortedFeedback = [...sampleFeedback].sort((a, b) => b.rating - a.rating);
  const averageRating = (sampleFeedback.reduce((sum, feedback) => sum + feedback.rating, 0) / sampleFeedback.length).toFixed(1);
  const fiveStarCount = sampleFeedback.filter(f => f.rating === 5).length;
  const recentFeedbackCount = sampleFeedback.filter(f => {
    const feedbackDate = new Date(f.date);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return feedbackDate >= weekAgo;
  }).length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/10 border-b border-white/20 p-4 sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-white">Citizen Feedback & Reports</h1>
        </div>
      </header>

      <main className="p-6 space-y-8 animate-fade-in">
        {/* Performance Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-white">{averageRating}</p>
              <p className="text-gray-300 text-sm">Average Rating</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-white">{fiveStarCount}</p>
              <p className="text-gray-300 text-sm">Five Star Reviews</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-white">{recentFeedbackCount}</p>
              <p className="text-gray-300 text-sm">This Week</p>
            </CardContent>
          </Card>
        </section>

        {/* Citizen Feedback */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Recent Citizen Feedback</h2>
            <Badge className="bg-gradient-to-r from-blue-600 to-slate-600 text-white border-0">
              {sampleFeedback.length} Total Reviews
            </Badge>
          </div>
          
          <div className="space-y-4">
            {sortedFeedback.map((feedback, index) => (
              <Card 
                key={feedback.id} 
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-white/20">
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-slate-600 text-white font-semibold">
                          {feedback.citizenName.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-white text-base">{feedback.citizenName}</h3>
                        <div className="flex items-center mt-1">
                          {renderStars(feedback.rating)}
                        </div>
                        <Badge className="bg-white/10 text-gray-300 border-0 text-xs mt-1">
                          {feedback.issueType}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{feedback.date}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feedback.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Performance Insights */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Performance Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Top Performing Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { area: "Road Maintenance", rating: "4.8", trend: "+0.2" },
                  { area: "Street Lighting", rating: "4.6", trend: "+0.1" },
                  { area: "Sanitation", rating: "4.5", trend: "+0.3" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300">{item.area}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{item.rating}</span>
                      <span className="text-green-400 text-sm">{item.trend}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { area: "Water Supply", rating: "3.2", priority: "High" },
                  { area: "Drainage", rating: "3.8", priority: "Medium" },
                  { area: "Waste Management", rating: "4.0", priority: "Low" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300">{item.area}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{item.rating}</span>
                      <Badge className={`text-xs border-0 ${
                        item.priority === 'High' ? 'bg-red-500' :
                        item.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                      } text-white`}>
                        {item.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Add padding for mobile footer */}
        <div className="pb-32 md:pb-8"></div>
      </main>
    </div>
  );
};

export default AchievementsPage;