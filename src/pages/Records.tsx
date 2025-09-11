import DashboardLayout from "@/components/civix/DashboardLayout";
import PageLayout from "@/components/civix/PageLayout";
import ReportCard from "@/components/civix/ReportCard";

const mockRecords = [
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
];

const Records = () => {
  return (
    <DashboardLayout>
      <PageLayout title="My Reports" subtitle="Track your submissions">
        <div className="space-y-4">
          {mockRecords.map((record) => (
            <ReportCard
              key={record.id}
              title={record.title}
              description={record.description}
              status={record.status as "Approved" | "Pending"}
              date={record.date}
              progress={record.progress}
            />
          ))}
        </div>
      </PageLayout>
    </DashboardLayout>
  );
};

export default Records;