import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const indianLanguages = [
  "Assamese", "Bengali", "Bodo", "Dogri", "English", "Gujarati", "Hindi",
  "Kannada", "Kashmiri", "Konkani", "Maithili", "Malayalam", "Manipuri (Meitei)",
  "Marathi", "Nepali", "Odia (Oriya)", "Punjabi", "Sanskrit", "Santali",
  "Sindhi", "Tamil", "Telugu", "Urdu"
].sort(); // Ensure alphabetical order

const LanguageSettingsPage = () => {
  return (
    <>
      <header className="flex items-center p-4 border-b">
        <Link to="/settings">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold ml-2">Language</h1>
      </header>
      <main className="p-6">
        <RadioGroup defaultValue="English" className="space-y-4">
          {indianLanguages.map((lang) => (
            <div key={lang} className="flex items-center space-x-2">
              <RadioGroupItem value={lang} id={lang} />
              <Label htmlFor={lang} className="text-base">{lang}</Label>
            </div>
          ))}
        </RadioGroup>
        <div className="pb-20 md:pb-0" />
      </main>
    </>
  );
};

export default LanguageSettingsPage;