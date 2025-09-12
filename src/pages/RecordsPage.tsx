import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sampleIssues } from "@/data/issues";
import { useIsMobile } from "@/hooks/use-mobile";
import RecordsTable from "@/components/civix/RecordsTable";
import RecordsCardList from "@/components/civix/RecordsCardList";

const RecordsPage = () => {
  const isMobile = useIsMobile();

  // For now, we'll display all issues. You can add filtering logic here if needed.
  const issuesToDisplay = sampleIssues;

  return (
    <>
      <header className="flex items-center p-4 border-b">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold ml-2">My Records</h1>
      </header>
      <main className="p-6 space-y-6">
        {isMobile ? (
          <RecordsCardList issues={issuesToDisplay} />
        ) : (
          <RecordsTable issues={issuesToDisplay} />
        )}
        <div className="pb-20 md:pb-0" />
      </main>
    </>
  );
};

export default RecordsPage;