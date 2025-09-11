import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Upload } from "lucide-react";

interface IssueCardProps {
  imgSrc: string;
  category: string;
  description: string;
  location: string;
  status: "Pending" | "In-progress" | "Resolved";
}

const IssueCard = ({
  imgSrc,
  category,
  description,
  location,
  status,
}: IssueCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={imgSrc}
          alt="Issue"
          className="h-48 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">{category}</Badge>
        <p className="mb-2 text-sm text-gray-600">{description}</p>
        <div className="flex items-center text-xs text-gray-500">
          <MapPin className="mr-1 h-3 w-3" />
          {location}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between bg-gray-50 p-4">
        <div className="flex gap-2">
          <Button size="sm" variant={status === "Pending" ? "default" : "outline"}>Accept</Button>
          <Button size="sm" variant={status === "In-progress" ? "default" : "outline"}>In-progress</Button>
          <Button size="sm" variant={status === "Resolved" ? "default" : "outline"}>Resolved</Button>
        </div>
        <Button size="sm" variant="outline">
          <Upload className="mr-2 h-4 w-4" />
          Proof
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IssueCard;