import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IssueCard from "./IssueCard";

const issues = [
  {
    imgSrc: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070",
    category: "Leaking Pipe",
    description: "Major pipeline burst near the main road, causing water logging.",
    location: "Main Street, City Center",
    status: "Pending",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070",
    category: "Contamination",
    description: "Reports of muddy water from taps in the residential area.",
    location: "Oak Avenue, Suburbia",
    status: "In-progress",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070",
    category: "No Supply",
    description: "Water supply has been cut off for the last 24 hours without notice.",
    location: "Maple Drive, North District",
    status: "Resolved",
  },
];

const IssueList = () => {
  return (
    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger value="all">All Issues</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="in-progress">In-progress</TabsTrigger>
        <TabsTrigger value="resolved">Resolved</TabsTrigger>
        <TabsTrigger value="escalated">Escalated</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue, index) => (
            <IssueCard key={index} {...issue} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="pending" className="mt-4">
        <p>Pending issues will be listed here.</p>
      </TabsContent>
      <TabsContent value="in-progress" className="mt-4">
        <p>In-progress issues will be listed here.</p>
      </TabsContent>
      <TabsContent value="resolved" className="mt-4">
        <p>Resolved issues will be listed here.</p>
      </TabsContent>
      <TabsContent value="escalated" className="mt-4">
        <p>Escalated issues will be listed here.</p>
      </TabsContent>
    </Tabs>
  );
};

export default IssueList;