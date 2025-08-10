import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PortfolioPage() {
  const templates = [
    { id: "modern", name: "Modern", imgSrc: "/template-modern.png" },
    { id: "minimal", name: "Minimalist", imgSrc: "/template-minimal.png" },
    { id: "bold", name: "Bold", imgSrc: "/template-bold.png" },
  ];

  const sections = [
    { id: "experience", label: "Work Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Website</CardTitle>
          <CardDescription>
            Manage and customize your public portfolio. Your portfolio is live
            at:{" "}
            <span className="underline">
              {new URL(process.env.APP_URL!).hostname}/username
            </span>
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Template Selection</CardTitle>
          <CardDescription>
            Choose a template for your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id}>
              <CardContent className="p-4">
                <div className="aspect-video w-full overflow-hidden rounded-md border bg-muted">
                  {/* Placeholder for template image */}
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="text-muted-foreground">{template.name}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Select</Button>
              </CardFooter>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customization</CardTitle>
          <CardDescription>
            Customize the look and feel of your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="primary-color">Primary Color</Label>
            <Input
              id="primary-color"
              type="color"
              defaultValue="#000000"
              className="w-24"
            />
          </div>
          <div className="grid gap-2">
            <Label>Visible Sections</Label>
            <div className="flex flex-col gap-2">
              {sections.map((section) => (
                <div key={section.id} className="flex items-center space-x-2">
                  <Checkbox id={section.id} defaultChecked />
                  <label
                    htmlFor={section.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {section.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
