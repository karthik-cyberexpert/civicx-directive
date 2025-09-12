import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { showSuccess } from "@/utils/toast";

interface RecordData {
  name: string;
  issuesCleared: number;
}

const recordFormSchema = z.object({
  name: z.string().min(1, "Label is required."),
  issuesCleared: z.coerce.number().min(0, "Value must be a positive number."),
});

type RecordFormValues = z.infer<typeof recordFormSchema>;

const getInitialData = (key: string, fallback: RecordData[]): RecordData[] => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : fallback;
  } catch (error) {
    console.error("Failed to parse localStorage data:", error);
    return fallback;
  }
};

type FilterType = "day" | "week" | "month" | "year";

const RecordsPage = () => {
  const [filter, setFilter] = useState<FilterType>("day");

  const [dayData, setDayData] = useState<RecordData[]>(() => getInitialData("dayData", []));
  const [weekData, setWeekData] = useState<RecordData[]>(() => getInitialData("weekData", []));
  const [monthData, setMonthData] = useState<RecordData[]>(() => getInitialData("monthData", []));
  const [yearData, setYearData] = useState<RecordData[]>(() => getInitialData("yearData", []));

  useEffect(() => { localStorage.setItem("dayData", JSON.stringify(dayData)); }, [dayData]);
  useEffect(() => { localStorage.setItem("weekData", JSON.stringify(weekData)); }, [weekData]);
  useEffect(() => { localStorage.setItem("monthData", JSON.stringify(monthData)); }, [monthData]);
  useEffect(() => { localStorage.setItem("yearData", JSON.stringify(yearData)); }, [yearData]);

  const form = useForm<RecordFormValues>({
    resolver: zodResolver(recordFormSchema),
    defaultValues: { name: "", issuesCleared: 0 },
  });

  const onSubmit = (data: RecordFormValues) => {
    const newData = { name: data.name, issuesCleared: data.issuesCleared };
    switch (filter) {
      case "day": setDayData((prev) => [...prev, newData]); break;
      case "week": setWeekData((prev) => [...prev, newData]); break;
      case "month": setMonthData((prev) => [...prev, newData]); break;
      case "year": setYearData((prev) => [...prev, newData]); break;
    }
    showSuccess("Record added successfully!");
    form.reset({ name: "", issuesCleared: 0 });
  };

  const getData = () => {
    switch (filter) {
      case "day": return dayData;
      case "week": return weekData;
      case "month": return monthData;
      case "year": return yearData;
      default: return [];
    }
  };

  const data = getData();
  const placeholderText = `e.g., ${
    filter === 'day' ? 'Monday' :
    filter === 'week' ? 'Week 1' :
    filter === 'month' ? 'January' : '2024'
  }`;
  const currentFilterLabel = filter.charAt(0).toUpperCase() + filter.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="flex items-center p-4 border-b">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">My Records</h1>
        </header>
        <main className="p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Record for {currentFilterLabel}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:flex md:items-end md:gap-4 md:space-y-0">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>{currentFilterLabel} Label</FormLabel>
                        <FormControl>
                          <Input placeholder={placeholderText} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="issuesCleared"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Issues Cleared</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 15" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Add Record</Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issues Cleared Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-2 mb-4">
                <Button variant={filter === "day" ? "default" : "outline"} onClick={() => setFilter("day")}>Day</Button>
                <Button variant={filter === "week" ? "default" : "outline"} onClick={() => setFilter("week")}>Week</Button>
                <Button variant={filter === "month" ? "default" : "outline"} onClick={() => setFilter("month")}>Month</Button>
                <Button variant={filter === "year" ? "default" : "outline"} onClick={() => setFilter("year")}>Year</Button>
              </div>
              <div className="h-64">
                {data.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" interval={0} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="issuesCleared" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    No records found for this period. Add one above to get started!
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default RecordsPage;