import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfilePage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>
            Manage your professional data to power the AI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="linkedin-url">LinkedIn Profile URL</Label>
              <Input
                id="linkedin-url"
                placeholder="https://linkedin.com/in/your-profile"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="resume-pdf">Resume (PDF)</Label>
              <Input id="resume-pdf" type="file" />
              <p className="text-xs text-muted-foreground">
                Upload your resume for AI analysis and content generation.
              </p>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Work Experience</CardTitle>
          <CardDescription>Add your work experience manually.</CardDescription>
        </CardHeader>
        <CardContent>{/* Add form for work experience here */}</CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Add Experience</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>List your professional skills.</CardDescription>
        </CardHeader>
        <CardContent>{/* Add form for skills here */}</CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Add Skill</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
