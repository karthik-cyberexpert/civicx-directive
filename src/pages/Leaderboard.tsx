import DashboardLayout from "@/components/civix/DashboardLayout";
import PageLayout from "@/components/civix/PageLayout";

const Leaderboard = () => {
  return (
    <DashboardLayout>
      <PageLayout
        title="Leaderboard"
        subtitle="Top performing citizens and departments"
      >
        <div className="p-4 md:p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-lg font-bold md:text-2xl">Leader Board</h2>
          <p className="text-center text-gray-500">
            The leader board will be displayed here.
          </p>
        </div>
      </PageLayout>
    </DashboardLayout>
  );
};

export default Leaderboard;