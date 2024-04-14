"use client";
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
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { spinner } from "@/components/chat/spinner";

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    console.log("formData: ", formData);
    const error = await signup(formData);
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
          <CardTitle className="text-2xl flex flex-row w-full items-center gap-3 py-4 justify-center">
            <Image
              src="/mermaid.png"
              alt="logo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className=" font-urban text-xl font-bold inline-block">
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
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first_name">First name</Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    placeholder="Lee"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last_name">Last name</Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    placeholder="Rob"
                    required
                  />
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
                <Input
                  id="password"
                  placeholder="Choose a password..."
                  name="password"
                  type="password"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-neutral-900  dark:bg-white"
              >
                {loading ? (
                  <div className="flex flex-row items-center gap-2">
                    {spinner} <span>Loading...</span>
                  </div>
                ) : (
                  "Sign up"
                )}
              </Button>
            </form>
            <div className="relative my-2">
              <span className="absolute text-[10px] px-2 bg-white text-neutral-800 dark:text-neutral-500 font-semibold dark:bg-neutral-900 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
                OR
              </span>
              <Separator />
            </div>
            <GoogleSignInButton />
            <GithubSignInButton />
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
