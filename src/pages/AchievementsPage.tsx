import { Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Feedback {
  id: string;
  citizenName: string;
  rating: number;
  comment: string;
  date: string;
}

const sampleFeedback: Feedback[] = [
  {
    id: "1",
    citizenName: "Priya Sharma",
    rating: 5,
    comment: "Excellent work on the pothole repair! The road is much smoother now. Thank you!",
    date: "2023-10-28",
  },
  {
    id: "2",
    citizenName: "Rahul Verma",
    rating: 4,
    comment: "The street light was fixed quickly. Appreciate the prompt response.",
    date: "2023-10-27",
  },
  {
    id: "3",
    citizenName: "Sneha Reddy",
    rating: 5,
    comment: "Very impressed with the cleanliness drive. Our neighborhood looks much better.",
    date: "2023-10-26",
  },
  {
    id: "4",
    citizenName: "Amit Kumar",
    rating: 3,
    comment: "The issue was resolved, but it took a bit longer than expected.",
    date: "2023-10-25",
  },
];

const AchievementsPage = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill={i < rating ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">Feedback</h1>
        </header>
        <main className="p-6 space-y-4">
          {sampleFeedback.map((feedback) => (
            <Card key={feedback.id} className="shadow-sm">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{feedback.citizenName.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-base">{feedback.citizenName}</h3>
                      <div className="flex items-center mt-0.5">
                        {renderStars(feedback.rating)}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{feedback.date}</span>
                </div>
                <p className="text-gray-700 text-sm">{feedback.comment}</p>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
};

export default AchievementsPage;