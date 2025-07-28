// src/app/page.tsx
import { Button } from "@/components/ui/Button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/Card";
import { ArrowRight, Bot, Check } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-12">
      
      {/* New Card Component */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>AI Content Generator</CardTitle>
          <CardDescription>Create high-converting copy in seconds.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Generate Blog Posts</li>
            <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Write Ad Copy</li>
            <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Draft Emails</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" className="w-full">
            Try The Generator
          </Button>
        </CardFooter>
      </Card>

      {/* Existing Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <Button variant="primary" size="lg">Start Free Trial</Button>
        <Button variant="outline" size="md">Watch Demo</Button>
        <Button variant="ghost" icon={Bot}>AI Assistant</Button>
      </div>

    </main>
  );
}