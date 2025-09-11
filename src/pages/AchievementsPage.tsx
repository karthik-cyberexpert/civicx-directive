import {
  Award as AwardIcon,
  MessageSquare,
  PenSquare,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import AchievementItem from "@/components/civix/AchievementItem";
import DashboardLayout from "@/components/civix/DashboardLayout";
import PageLayout from "@/components/civix/PageLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const reporterAchievements = [
  {
    icon: PenSquare,
    title: "First Report",
    description: "You've successfully submitted your first issue.",
    unlocked: true,
  },
  {
    icon: ShieldCheck,
    title: "Verified Reporter",
    description: "Your first reported issue has been verified by an official.",
    unlocked: true,
  },
  {
    icon: AwardIcon,
    title: "Community Helper",
    description: "Report 5 verified issues in your community.",
    unlocked: false,
  },
];

const heroesAchievements = [
  {
    icon: Star,
    title: "Bronze Contributor",
    description: "Earn 100 points and reach the Bronze tier.",
    unlocked: true,
  },
  {
    icon: Star,
    title: "Silver Contributor",
    description: "Earn 250 points and reach the Silver tier.",
    unlocked: false,
  },
  {
    icon: Star,
    title: "Gold Contributor",
    description: "Earn 500 points and reach the Gold tier.",
    unlocked: false,
  },
];

const feedbacksAchievements = [
  {
    icon: MessageSquare,
    title: "First Feedback",
    description: "Provide feedback on a resolved issue for the first time.",
    unlocked: true,
  },
  {
    icon: Users,
    title: "Helpful Voice",
    description: "Your feedback was marked as 'helpful' by officials.",
    unlocked: false,
  },
];

const AchievementsPage = () => {
  return (
    <DashboardLayout>
      <PageLayout
        title="Achievements"
        subtitle="Your accomplishments and milestones"
      >
        <Tabs defaultValue="reporter" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="reporter">Reporter</TabsTrigger>
            <TabsTrigger value="heroes">Heroes</TabsTrigger>
            <TabsTrigger value="feedbacks">Feedbacks</TabsTrigger>
          </TabsList>
          <TabsContent value="reporter" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Reporter Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reporterAchievements.map((ach, index) => (
                  <AchievementItem key={index} {...ach} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="heroes" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Community Hero Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {heroesAchievements.map((ach, index) => (
                  <AchievementItem key={index} {...ach} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="feedbacks" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {feedbacksAchievements.map((ach, index) => (
                  <AchievementItem key={index} {...ach} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </PageLayout>
    </DashboardLayout>
  );
};

export default AchievementsPage;