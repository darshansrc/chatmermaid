import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";
import { GanttChart } from "lucide-react";
import { signup } from "@/actions/actions";
import { siteConfig } from "@/config/site";
import GoogleSignInButton from "@/components/auth/google-oauth-button";
import GithubSignInButton from "@/components/auth/github-oauth-button";

export default function LoginForm() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <Card className="mx-auto max-w-sm dark:bg-neutral-900">
        <CardHeader>
          <CardTitle className="text-2xl flex flex-row w-full items-center py-4 justify-center">
            <GanttChart
              strokeWidth={3}
              color="#6366f1"
              className="text-gradient_indigo-purple font-extrabold"
            />
            <span className="hidden font-urban text-xl font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </CardTitle>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" />
              </div>

              <Button
                type="submit"
                formAction={signup}
                className="w-full bg-neutral-900  dark:bg-white"
              >
                Create an account
              </Button>
            </form>
            <GoogleSignInButton />
            <GithubSignInButton />
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
