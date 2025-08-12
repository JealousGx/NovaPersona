import {
  Activity,
  ArrowUpRight,
  FileText,
  PenSquare,
  Star,
} from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link as CustomLink } from "@/components/ui/link";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Profile Completion
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">
              Complete your profile to get better AI suggestions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Brand Score</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82/100</div>
            <p className="text-xs text-muted-foreground">
              Based on your resume and LinkedIn profile.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Content Generated
            </CardTitle>
            <PenSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">
              LinkedIn posts and resume points this month.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Live</div>
            <p className="text-xs text-muted-foreground">
              Your portfolio is public and ready to be shared.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>
                Actionable steps to improve your personal brand.
              </CardDescription>
            </div>
            <Link
              href="/dashboard/profile"
              className="ml-auto flex items-center gap-2 hover:underline underline-offset-2 text-sm font-medium"
            >
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarFallback>1</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Upload your resume
                </p>
                <p className="text-sm text-muted-foreground">
                  Let AI analyze your experience and suggest improvements.
                </p>
              </div>
              <CustomLink
                href="/dashboard/profile"
                variant="outline"
                size="sm"
                className="ml-auto"
              >
                Go
              </CustomLink>
            </div>
            <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarFallback>2</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Generate a LinkedIn post
                </p>
                <p className="text-sm text-muted-foreground">
                  Create a post about your latest project.
                </p>
              </div>
              <CustomLink
                href="/dashboard/content-generator"
                variant="outline"
                size="sm"
                className="ml-auto"
              >
                Go
              </CustomLink>
            </div>
            <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarFallback>3</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Customize your portfolio
                </p>
                <p className="text-sm text-muted-foreground">
                  Choose a template and color scheme.
                </p>
              </div>
              <CustomLink
                href="/dashboard/portfolio"
                variant="outline"
                size="sm"
                className="ml-auto"
              >
                Go
              </CustomLink>
            </div>
          </CardContent>
        </Card>
        {/* Add another card here for recent activity or other info */}
      </div>
    </>
  );
}
