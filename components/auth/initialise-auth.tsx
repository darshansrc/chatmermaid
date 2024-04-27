"use client";
import useUser from "@/store/user-store";
import React from "react";
import { toast } from "sonner";

const InitialiseAuth = () => {
  const { user, fetchUser } = useUser();

  React.useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return <></>;
};

export default InitialiseAuth;
