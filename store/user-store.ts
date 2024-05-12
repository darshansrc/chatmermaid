import { getUser, logout } from "@/actions/actions";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  user: any;
  fetchUser: () => void;
  logoutUser: () => void;
}

const useUser = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      fetchUser: async () => {
        try {
          const data = await getUser();
          set({ user: data });
        } catch (error) {
          console.error(error);
        }
      },
      logoutUser: async () => {
        await logout();
        set({ user: null });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUser;
