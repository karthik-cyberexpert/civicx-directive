import { showSuccess } from "@/utils/toast";

export interface Issue {
  id: string;
  title: string;
  description: string;
  location: string;
  status: "Pending" | "In Progress" | "Resolved" | "Rejected"; // Added Rejected
  reportedAt: string;
  priority: "High" | "Medium" | "Low";
  citizenName: string; // New field
  issueArea: string; // New field
  category: string; // New field
}

export const sampleIssues: Issue[] = [
  {
    id: "1",
    title: "Large Pothole on Main Street",
    description: "There's a very large pothole near the intersection of Main St and Oak Ave, causing traffic hazards.",
    location: "Main St, near Oak Ave",
    status: "Resolved", // Changed to Resolved for example
    reportedAt: "2023-10-26T10:00:00Z",
    priority: "High",
    citizenName: "Priya Sharma",
    issueArea: "Roads",
    category: "Infrastructure",
  },
  {
    id: "2",
    title: "Broken Street Light",
    description: "Street light outside 123 Elm Street is not working, making the area dark at night.",
    location: "123 Elm St",
    status: "In Progress",
    reportedAt: "2023-10-25T14:30:00Z",
    priority: "Medium",
    citizenName: "Rahul Verma",
    issueArea: "Lighting",
    category: "Public Amenities",
  },
  {
    id: "3",
    title: "Garbage Pile Up",
    description: "Illegal dumping has created a large pile of garbage behind the park.",
    location: "Behind Central Park",
    status: "Pending",
    reportedAt: "2023-10-24T08:15:00Z",
    priority: "High",
    citizenName: "Sneha Reddy",
    issueArea: "Waste Management",
    category: "Sanitation",
  },
  {
    id: "4",
    title: "Damaged Public Bench",
    description: "A public bench in the town square has been broken and is unsafe to use.",
    location: "Town Square",
    status: "Rejected", // Changed to Rejected for example
    reportedAt: "2023-10-23T11:00:00Z",
    priority: "Low",
    citizenName: "Amit Kumar",
    issueArea: "Parks & Recreation",
    category: "Public Amenities",
  },
  {
    id: "5",
    title: "Water Leak in Sector 7",
    description: "A significant water leak has been reported near the community center in Sector 7.",
    location: "Sector 7 Community Center",
    status: "Resolved",
    reportedAt: "2023-10-22T09:00:00Z",
    priority: "Medium",
    citizenName: "Deepika Singh",
    issueArea: "Water Supply",
    category: "Infrastructure",
  },
  {
    id: "6",
    title: "Graffiti on Underpass Wall",
    description: "Extensive graffiti found on the walls of the underpass near the railway station.",
    location: "Railway Station Underpass",
    status: "In Progress",
    reportedAt: "2023-10-21T16:00:00Z",
    priority: "Low",
    citizenName: "Arjun Das",
    issueArea: "Public Spaces",
    category: "Vandalism",
  },
  {
    id: "7",
    title: "Blocked Drainage System",
    description: "Drainage system blocked near the market area causing water logging during rain.",
    location: "Market Area",
    status: "Pending",
    reportedAt: "2023-10-20T11:00:00Z",
    priority: "High",
    citizenName: "Kavita Rao",
    issueArea: "Drainage",
    category: "Infrastructure",
  },
  {
    id: "8",
    title: "Missing Road Sign",
    description: "A crucial road sign indicating a sharp turn is missing on Highway 45.",
    location: "Highway 45, near bridge",
    status: "Resolved",
    reportedAt: "2023-10-19T09:00:00Z",
    priority: "Medium",
    citizenName: "Rajesh Kumar",
    issueArea: "Road Safety",
    category: "Infrastructure",
  },
];

export const handleAccept = (issueId: string) => {
  console.log(`Issue ${issueId} accepted!`);
  showSuccess(`Issue ${issueId} accepted!`);
  // In a real app, you'd update the issue status in your state/backend
};

export const handleImplement = (issueId: string) => {
  console.log(`Starting implementation for issue ${issueId}!`);
  showSuccess(`Starting implementation for issue ${issueId}!`);
  // In a real app, you'd update the issue status in your state/backend
};