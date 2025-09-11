import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const districts = [
  { name: "North", status: "solved" },
  { name: "South", status: "pending" },
  { name: "East", status: "solved" },
  { name: "West", status: "pending" },
  { name: "Central", status: "solved" },
  { name: "Metro", status: "solved" },
  { name: "Rural", status: "pending" },
  { name: "Coastal", status: "solved" },
];

const DistrictHeatmap = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>District-wise Issue Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {districts.map((district) => (
            <div
              key={district.name}
              className={`p-4 rounded-lg text-center font-semibold text-white ${
                district.status === "solved" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {district.name}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DistrictHeatmap;