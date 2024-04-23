"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Icons } from "../shared/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import useAuthModal from "@/store/auth-modal-store";
import { getUser } from "@/actions/actions";
import { useRouter } from "next/navigation";

const StartEditing = () => {
  const { isAuthModalOpen, setIsAuthModalOpen } = useAuthModal();
  const [user, setUser] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const handleClick = () => {
    if (user) {
      router.push("/c");
    }
    setIsAuthModalOpen(true);
  };

  return (
    <Link
      href="/c"
      onClick={handleClick}
      className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-full")}
    >
      <span>Start Editing </span>
      <Icons.arrowRight className="size-4" />
    </Link>
  );
};

export default StartEditing;
