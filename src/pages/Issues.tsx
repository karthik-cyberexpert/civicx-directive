import BottomNav from "@/components/civix/BottomNav";
import Header from "@/components/civix/Header";

const Issues = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 pb-20">
      <Header />
      <main className="flex-1 p-4">
        <h2 className="mb-4 text-lg font-bold">Reported Issues</h2>
        <p className="text-center text-gray-500">Issue list will be displayed here.</p>
      </main>
      <BottomNav />
    </div>
  );
};

export default Issues;