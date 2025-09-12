import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sampleIssues, Issue } from "@/data/issues";
import { useIsMobile } from "@/hooks/use-mobile";
import RecordsTable from "@/components/civix/RecordsTable";
import RecordsCardList from "@/components/civix/RecordsCardList";
import { useState, useMemo } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import AchievementsBarChart from "@/components/civix/AchievementsBarChart";
import { format, startOfWeek, endOfWeek, eachDayOfInterval, eachWeekOfInterval, eachMonthOfInterval, eachYearOfInterval } from "date-fns";

type TimeFilter = "daily" | "weekly" | "monthly" | "yearly";

const RecordsPage = () => {
  const isMobile = useIsMobile();
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("monthly");

  const completedIssues = useMemo(
    () => sampleIssues.filter((issue) => issue.status === "Resolved"),
    []
  );

  const getChartData = (issues: Issue[], filter: TimeFilter) => {
    if (issues.length === 0) return [];

    const sortedIssues = [...issues].sort((a, b) => new Date(a.reportedAt).getTime() - new Date(b.reportedAt).getTime());
    const firstDate = new Date(sortedIssues[0].reportedAt);
    const lastDate = new Date(sortedIssues[sortedIssues.length - 1].reportedAt);

    const counts: { [key: string]: number } = {};
    let labels: string[] = [];

    switch (filter) {
      case "daily":
        labels = eachDayOfInterval({ start: firstDate, end: lastDate }).map(date => format(date, "MMM dd"));
        issues.forEach(issue => {
          const day = format(new Date(issue.reportedAt), "MMM dd");
          counts[day] = (counts[day] || 0) + 1;
        });
        break;
      case "weekly":
        labels = eachWeekOfInterval({ start: firstDate, end: lastDate }, { weekStartsOn: 1 }).map(date => `Week ${format(date, "w, yyyy")}`);
        issues.forEach(issue => {
          const week = `Week ${format(startOfWeek(new Date(issue.reportedAt), { weekStartsOn: 1 }), "w, yyyy")}`;
          counts[week] = (counts[week] || 0) + 1;
        });
        break;
      case "monthly":
        labels = eachMonthOfInterval({ start: firstDate, end: lastDate }).map(date => format(date, "MMM yyyy"));
        issues.forEach(issue => {
          const month = format(new Date(issue.reportedAt), "MMM yyyy");
          counts[month] = (counts[month] || 0) + 1;
        });
        break;
      case "yearly":
        labels = eachYearOfInterval({ start: firstDate, end: lastDate }).map(date => format(date, "yyyy"));
        issues.forEach(issue => {
          const year = format(new Date(issue.reportedAt), "yyyy");
          counts[year] = (counts[year] || 0) + 1;
        });
        break;
    }

    return labels.map(label => ({
      name: label,
      "Completed Issues": counts[label] || 0,
    }));
  };

  const chartData = useMemo(() => getChartData(completedIssues, timeFilter), [completedIssues, timeFilter]);

  return (
    <>
      <header className="flex items-center p-4 border-b">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold ml-2">My Records & Achievements</h1>
      </header>
      <main className="p-6 space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-4">Achievements Overview</h2>
          <ToggleGroup
            type="single"
            value={timeFilter}
            onValueChange={(value: TimeFilter) => value && setTimeFilter(value)}
            className="mb-6 justify-center"
          >
            <ToggleGroupItem value="daily" aria-label="Toggle daily">
              Daily
            </ToggleGroupItem>
            <ToggleGroupItem value="weekly" aria-label="Toggle weekly">
              Weekly
            </ToggleGroupItem>
            <ToggleGroupItem value="monthly" aria-label="Toggle monthly">
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem value="yearly" aria-label="Toggle yearly">
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>
          <AchievementsBarChart data={chartData} timeFilter={timeFilter} />
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Completed Issues</h2>
          {isMobile ? (
            <RecordsCardList issues={completedIssues} />
          ) : (
            <RecordsTable issues={completedIssues} />
          )}
        </section>
        <div className="pb-20 md:pb-0" />
      </main>
    </>
  );
};

export default RecordsPage;