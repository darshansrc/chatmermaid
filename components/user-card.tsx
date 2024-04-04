"use client";
import { getUser } from "@/actions/actions";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
        <div className="flex flex-row gap-2">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            src={user.user_metadata.avatar_url}
            alt={user.name}
          />
          <div className="flex text-sm  flex-col truncate ">
            <p className="font-medium">{user.user_metadata.full_name}</p>
            <p className="text-[10px]">{user.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
