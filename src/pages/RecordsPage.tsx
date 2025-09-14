import { Link } from "react-router-dom";
import { ArrowLeft, BarChart as BarChartIcon, TrendingUp, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sampleIssues, Issue } from "@/data/issues";
import { useIsMobile } from "@/hooks/use-mobile";
import RecordsTable from "@/components/civix/RecordsTable";
import RecordsCardList from "@/components/civix/RecordsCardList";
import { useState, useMemo } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import AchievementsBarChart from "@/components/civix/AchievementsBarChart";
import { format, startOfWeek, endOfWeek, eachDayOfInterval, eachWeekOfInterval, eachMonthOfInterval, eachYearOfInterval } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TimeFilter = "daily" | "weekly" | "monthly" | "yearly";

const RecordsPage = () => {
  const isMobile = useIsMobile();
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("monthly");
  const [showChart, setShowChart] = useState(false);

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
        labels = eachDayOfInterval({ start: firstDate, end: lastDate }).map(date => format(date, "dd-MM-yyyy"));
        issues.forEach(issue => {
          const day = format(new Date(issue.reportedAt), "dd-MM-yyyy");
          counts[day] = (counts[day] || 0) + 1;
        });
        break;
      case "weekly":
        labels = eachWeekOfInterval({ start: firstDate, end: lastDate }, { weekStartsOn: 1 }).map(date => {
          const startDate = startOfWeek(date, { weekStartsOn: 1 });
          const endDate = endOfWeek(date, { weekStartsOn: 1 });
          return `${format(startDate, "dd-MM-yyyy")} to ${format(endDate, "dd-MM-yyyy")}`;
        });
        issues.forEach(issue => {
          const startDate = startOfWeek(new Date(issue.reportedAt), { weekStartsOn: 1 });
          const endDate = endOfWeek(new Date(issue.reportedAt), { weekStartsOn: 1 });
          const weekLabel = `${format(startDate, "dd-MM-yyyy")} to ${format(endDate, "dd-MM-yyyy")}`;
          counts[weekLabel] = (counts[weekLabel] || 0) + 1;
        });
        break;
      case "monthly":
        labels = eachMonthOfInterval({ start: firstDate, end: lastDate }).map(date => format(date, "MMMM yyyy"));
        issues.forEach(issue => {
          const month = format(new Date(issue.reportedAt), "MMMM yyyy");
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

  const stats = [
    {
      icon: Trophy,
      label: "Total Completed",
      value: completedIssues.length,
      color: "from-green-600 to-green-700",
      description: "Issues resolved"
    },
    {
      icon: TrendingUp,
      label: "This Month",
      value: "8",
      color: "from-blue-600 to-slate-600",
      description: "New completions"
    },
    {
      icon: Calendar,
      label: "Average Time",
      value: "2.3 days",
      color: "from-slate-600 to-gray-700",
      description: "To resolution"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/10 border-b border-white/20 p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-white">Records & Achievements</h1>
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setShowChart(!showChart)}
            className={`border-white/20 text-white hover:bg-white/10 transition-all duration-300 ${
              showChart ? 'bg-white/10' : ''
            }`}
          >
            <BarChartIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="p-6 space-y-8 max-w-6xl mx-auto animate-fade-in">
        {/* Stats Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                    <p className="text-gray-400 text-xs">{stat.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Chart Section */}
        {showChart && (
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm animate-slide-up">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-xl">Performance Overview</CardTitle>
                <Badge className="bg-gradient-to-r from-blue-600 to-slate-600 text-white border-0">
                  Analytics
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ToggleGroup
                type="single"
                value={timeFilter}
                onValueChange={(value: TimeFilter) => value && setTimeFilter(value)}
                className="justify-center bg-white/5 rounded-xl p-1"
              >
                <ToggleGroupItem 
                  value="daily" 
                  aria-label="Toggle daily"
                  className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-blue-600 data-[state=on]:to-slate-600 data-[state=on]:text-white text-gray-300"
                >
                  Daily
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="weekly" 
                  aria-label="Toggle weekly"
                  className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-blue-600 data-[state=on]:to-slate-600 data-[state=on]:text-white text-gray-300"
                >
                  Weekly
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="monthly" 
                  aria-label="Toggle monthly"
                  className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-blue-600 data-[state=on]:to-slate-600 data-[state=on]:text-white text-gray-300"
                >
                  Monthly
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="yearly" 
                  aria-label="Toggle yearly"
                  className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-blue-600 data-[state=on]:to-slate-600 data-[state=on]:text-white text-gray-300"
                >
                  Yearly
                </ToggleGroupItem>
              </ToggleGroup>
              <AchievementsBarChart data={chartData} timeFilter={timeFilter} />
            </CardContent>
          </Card>
        )}

        {/* Records Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Completed Issues</h2>
            <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
              {completedIssues.length} Total
            </Badge>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
            {isMobile ? (
              <RecordsCardList issues={completedIssues} />
            ) : (
              <RecordsTable issues={completedIssues} />
            )}
          </div>
        </section>

        {/* Add padding for mobile footer */}
        <div className="pb-32 md:pb-8"></div>
      </main>
    </div>
  );
};

export default RecordsPage;