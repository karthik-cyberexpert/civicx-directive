import DashboardLayout from "@/components/civix/DashboardLayout";
import PageLayout from "@/components/civix/PageLayout";
import ReportCard from "@/components/civix/ReportCard";

const mockIssues = [
  {
    id: 1,
    title: "Pothole on Main Street",
    description: "Large pothole causing traffic issues.",
    status: "Approved",
    date: "1/15/2024",
    progress: 75,
  },
  {
    id: 2,
    title: "Broken Streetlight",
    description: "Streetlight on Elm St. is flickering.",
    status: "Pending",
    date: "1/18/2024",
    progress: 25,
  },
  {
    id: 3,
    title: "Overflowing Dumpster",
    description: "Dumpster behind the library hasn't been emptied in weeks.",
    status: "Pending",
    date: "1/20/2024",
    progress: 10,
  },
];

const Issues = () => {
  return (
    <DashboardLayout>
      <PageLayout
        title="Reported Issues"
        subtitle="All submitted issues from citizens"
      >
        <div className="space-y-4">
          {mockIssues.map((issue) => (
            <ReportCard
              key={issue.id}
              title={issue.title}
              description={issue.description}
              status={issue.status as "Approved" | "Pending"}
              date={issue.date}
              progress={issue.progress}
            />
          ))}
        </div>
      </PageLayout>
    </DashboardLayout>
  );
};

export default Issues;