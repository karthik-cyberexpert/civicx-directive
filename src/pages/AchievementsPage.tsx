import DashboardLayout from "@/components/civix/DashboardLayout";
import PageLayout from "@/components/civix/PageLayout";

const AchievementsPage = () => {
  return (
    <DashboardLayout>
      <PageLayout
        title="Achievements"
        subtitle="Your accomplishments and milestones"
      >
        <div className="p-4 md:p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-lg font-bold md:text-2xl">Achievements</h2>
          <p className="text-center text-gray-500">
            Achievements details will be displayed here.
          </p>
        </div>
      </PageLayout>
    </DashboardLayout>
  );
};

export default AchievementsPage;