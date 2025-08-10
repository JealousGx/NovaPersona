import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContentGeneratorPage() {
  return (
    <div className="grid flex-1 items-start gap-4 lg:grid-cols-2 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>AI Content Generator</CardTitle>
            <CardDescription>
              Generate tailored content for LinkedIn posts and resume bullet
              points.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="content-type">Content Type</Label>
                <Select>
                  <SelectTrigger id="content-type" aria-label="Select type">
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="linkedin">LinkedIn Post</SelectItem>
                    <SelectItem value="resume">Resume Bullet Point</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Topic / Task Description</Label>
                <Textarea
                  id="description"
                  placeholder="e.g., 'my new project on NovaPersona' or describe a task for a resume bullet point."
                  className="min-h-32"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Generate</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="grid auto-rows-max items-start gap-4 lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Generated Content</CardTitle>
            <CardDescription>
              Your AI-generated content will appear here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <Textarea
                readOnly
                placeholder="Generated content..."
                className="min-h-64 bg-muted"
              />
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button variant="outline">Copy</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
