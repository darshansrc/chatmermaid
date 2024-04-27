import { getUser, logout } from "@/actions/actions";
import { create } from "zustand";

interface UserStore {
  user: any;
  fetchUser: () => void;
  logoutUser: () => void;
}

const useUser = create<UserStore>((set) => ({
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
}));

export default useUser;
