import { getAllDiagrams } from "@/actions/actions";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface DiagramStore {
  diagrams: any;
  fetchDiagrams: () => void;
}

const useDiagramStore = create<DiagramStore>()(
  persist(
    (set) => ({
      diagrams: [],
      fetchDiagrams: async () => {
        try {
          const data = await getAllDiagrams();
          set({ diagrams: data });
        } catch (error) {
          console.error(error);
        }
      },
    }),
    {
      name: "diagram-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useDiagramStore;
