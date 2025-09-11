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
          <TabsList className="flex h-auto w-full flex-col items-stretch gap-1">
            <TabsTrigger
              value="reporter"
              className="justify-start hover:bg-blue-100 hover:text-blue-800 data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:hover:bg-blue-900/30 dark:hover:text-blue-200"
            >
              Reporter
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              className="justify-start hover:bg-blue-100 hover:text-blue-800 data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:hover:bg-blue-900/30 dark:hover:text-blue-200"
            >
              Heroes
            </TabsTrigger>
            <TabsTrigger
              value="feedbacks"
              className="justify-start hover:bg-blue-100 hover:text-blue-800 data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:hover:bg-blue-900/30 dark:hover:text-blue-200"
            >
              Feedbacks
            </TabsTrigger>
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