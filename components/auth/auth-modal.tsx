"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuthModal from "@/store/auth-modal-store";
import GoogleSignInButton from "./google-oauth-button";
import GithubSignInButton from "./github-oauth-button";
import { sendMagicLink } from "@/actions/actions";
import { toast } from "sonner";

export function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen } = useAuthModal();
  const [showEmailForm, setShowEmailForm] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleContinueWithEmail = () => {
    setShowEmailForm(true);
  };

  const handleBackToOAuth = () => {
    setShowEmailForm(false);
  };

  const handleSendMagicLink = async () => {
    await sendMagicLink(email);
    toast("Magic link sent to your email");
  };

  function LoginForm({ className }) {
    return (
      <div className={cn("grid items-start gap-4", className)}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-row gap-2 items-center justify-end">
          <Button variant="ghost" onClick={handleBackToOAuth}>
            Back
          </Button>
          <Button variant="default" onClick={handleSendMagicLink}>
            Send Link
          </Button>
        </div>
      </div>
    );
  }

  const OAuthButtons = ({ className }: React.ComponentProps<"div">) => {
    return (
      <div className={cn("grid items-start gap-4", className)}>
        <GoogleSignInButton />
        <GithubSignInButton />
        <Button variant="ghost" onClick={handleContinueWithEmail}>
          Continue with email
        </Button>
      </div>
    );
  };

  if (isDesktop) {
    return (
      <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login or Signup</DialogTitle>
            <DialogDescription>
              By continuing you agree to our terms of service and privacy
              policy.
            </DialogDescription>
          </DialogHeader>
          {showEmailForm ? (
            <div className={cn("grid items-start gap-4")}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex flex-row gap-2 items-center justify-end">
                <Button variant="ghost" onClick={handleBackToOAuth}>
                  Back
                </Button>
                <Button variant="default" onClick={handleSendMagicLink}>
                  Send Link
                </Button>
              </div>
            </div>
          ) : (
            <OAuthButtons />
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Login or Signup</DrawerTitle>
          <DrawerDescription>
            By continuing you agree to our terms of service and privacy policy.
          </DrawerDescription>
        </DrawerHeader>
        <LoginForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" onClick={() => setIsAuthModalOpen(false)}>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
