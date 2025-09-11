import DashboardLayout from "@/components/civix/DashboardLayout";
import PageLayout from "@/components/civix/PageLayout";

const Settings = () => {
  return (
    <DashboardLayout>
      <PageLayout
        title="Settings"
        subtitle="Manage your profile and preferences"
      >
        <div className="p-4 md:p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-lg font-bold md:text-2xl">Settings</h2>
          <p className="text-center text-gray-500">
            Settings options will be displayed here.
          </p>
        </div>
      </PageLayout>
    </DashboardLayout>
  );
};

export default Settings;