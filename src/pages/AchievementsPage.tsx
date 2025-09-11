import DashboardLayout from "@/components/civix/DashboardLayout";
import Header from "@/components/civix/Header";

const AchievementsPage = () => {
  return (
    <DashboardLayout>
      <Header />
      <main className="p-4 md:p-6">
        <h2 className="mb-4 text-lg font-bold md:text-2xl">Achievements</h2>
        <p className="text-center text-gray-500">Achievements details will be displayed here.</p>
      </main>
    </DashboardLayout>
  );
};

export default AchievementsPage;