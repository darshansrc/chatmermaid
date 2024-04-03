"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
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
import { login } from "@/actions/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import GoogleSignInButton from "@/components/auth/google-oauth-button";
import GithubSignInButton from "@/components/auth/github-oauth-button";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    console.log("formData: ", formData);
    const error = await login(formData);
    if (error) {
      setError(error);
    }
    setLoading(false);
  };

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
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div>
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
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              {error && (
                <Alert variant="destructive" className="p-2">
                  <AlertDescription className="flex flex-row items-center justify-start text-left gap-2">
                    <AlertCircle className="h-4 w-4" /> {error}
                  </AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full">
                {loading ? "Loading..." : "Sign in"}
              </Button>
            </form>
            <GoogleSignInButton />
            <GithubSignInButton />
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
