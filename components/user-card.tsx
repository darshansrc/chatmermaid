"use client";
import { getUser } from "@/actions/actions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserCard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      console.log(user);
      setUser(user);
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              <div className="flex flex-row items-center gap-2">
                <Image
                  width={35}
                  height={35}
                  className="rounded-full"
                  src={user.user_metadata.avatar_url}
                  alt={user.name}
                />
                <div className="flex text-sm font-medium  flex-col text-left truncate ">
                  {user.user_metadata.full_name}
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8} align="start" className="w-fit">
            <DropdownMenuItem className="flex-col items-start">
              <div className="text-xs text-zinc-500">{user.email}</div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <form>
              <button className=" relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none transition-colors hover:bg-red-500 hover:text-white focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                Sign Out
              </button>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default UserCard;
