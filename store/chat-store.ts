import { getChats } from "@/actions/actions";
import { Message } from "ai";
import { create } from "zustand";

interface chat {
  id: string;
  diagramId: string;
  createdAt: string;
  role: string;
  content: string;
}

interface chatStore {
  chat: Message[];
  fetchChat: (diagramId: string) => void;
}

const useChatStore = create<chatStore>((set) => ({
  chat: [],
  fetchChat: async (diagramId) => {
    set({ chat: [] });
    try {
      const data = (await getChats(diagramId)) as Message[];
      set({ chat: data });
    } catch (error) {
      console.error(error);
    }
  },
  addChat: async (diagramId, message) => {
    set((state) => {
      return { chat: [...state.chat, { message, ...diagramId }] };
    });
  },
}));

export default useChatStore;
