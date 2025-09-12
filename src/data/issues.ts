import { showSuccess } from "@/utils/toast";

export interface Issue {
  id: string;
  title: string;
  description: string;
  location: string;
  status: "Pending" | "In Progress" | "Resolved";
  reportedAt: string;
  priority: "High" | "Medium" | "Low"; // Added priority field
}

export const sampleIssues: Issue[] = [
  {
    id: "1",
    title: "Large Pothole on Main Street",
    description: "There's a very large pothole near the intersection of Main St and Oak Ave, causing traffic hazards.",
    location: "Main St, near Oak Ave",
    status: "Pending",
    reportedAt: "2023-10-26T10:00:00Z",
    priority: "High", // Assigned priority
  },
  {
    id: "2",
    title: "Broken Street Light",
    description: "Street light outside 123 Elm Street is not working, making the area dark at night.",
    location: "123 Elm St",
    status: "In Progress",
    reportedAt: "2023-10-25T14:30:00Z",
    priority: "Medium", // Assigned priority
  },
  {
    id: "3",
    title: "Garbage Pile Up",
    description: "Illegal dumping has created a large pile of garbage behind the park.",
    location: "Behind Central Park",
    status: "Pending",
    reportedAt: "2023-10-24T08:15:00Z",
    priority: "High", // Assigned priority
  },
  {
    id: "4",
    title: "Damaged Public Bench",
    description: "A public bench in the town square has been broken and is unsafe to use.",
    location: "Town Square",
    status: "Resolved",
    reportedAt: "2023-10-23T11:00:00Z",
    priority: "Low", // Assigned priority
  },
  {
    id: "5",
    title: "Water Leak in Sector 7",
    description: "A significant water leak has been reported near the community center in Sector 7.",
    location: "Sector 7 Community Center",
    status: "Resolved",
    reportedAt: "2023-10-22T09:00:00Z",
    priority: "Medium", // Assigned priority
  },
  {
    id: "6",
    title: "Graffiti on Underpass Wall",
    description: "Extensive graffiti found on the walls of the underpass near the railway station.",
    location: "Railway Station Underpass",
    status: "In Progress",
    reportedAt: "2023-10-21T16:00:00Z",
    priority: "Low", // Assigned priority
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