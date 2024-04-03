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
import { siteConfig } from "@/config/site";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  return (
    <div className="w-full h-screen flex items-center justify-center dark:bg-zinc-900">
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
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full flex flex-row gap-2 items-center justify-center"
            >
              <FcGoogle size={16} /> Continue with Google
            </Button>
            <Button
              variant="outline"
              className="w-full flex flex-row gap-2 items-center justify-center"
            >
              <FaGithub /> Continue with Github
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
