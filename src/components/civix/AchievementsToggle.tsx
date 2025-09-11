import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AchievementsToggle = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Your Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="reporter" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="reporter">Reporter</TabsTrigger>
            <TabsTrigger value="heroes">Heroes</TabsTrigger>
            <TabsTrigger value="feedbacks">Feedbacks</TabsTrigger>
          </TabsList>
          <TabsContent value="reporter">
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Reporter achievements will be shown here.</p>
            </div>
          </TabsContent>
          <TabsContent value="heroes">
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Details about citizen heroes will be shown here.</p>
            </div>
          </TabsContent>
          <TabsContent value="feedbacks">
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Citizen feedback will be shown here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AchievementsToggle;