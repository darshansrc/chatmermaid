// import { getAllDiagrams } from "@/actions/actions";
// import { create } from "zustand";

// interface DiagramStore {
//   diagrams: any;
//   fetchDiagrams: () => void;
// }

// interface Diagram {
//   id: string;
//   diagram_name: string;
//   user_id: string;
//   code: string;
//   created_at: string;
//   last_updated_at: string;
//   is_public: boolean;
// }

// const useDiagramStore = create<DiagramStore>((set) => ({
//   diagrams: [],
//   fetchDiagrams: async () => {
//     try {
//       const data = await getAllDiagrams();
//       set({ diagrams: data });
//     } catch (error) {
//       console.error(error);
//     }
//   },
// }));

// export default useDiagramStore;

import { create } from "zustand";

interface svgStore {
  svg: string;
  setSvg: (svg: string) => void;
}

const useSvgStore = create<svgStore>((set) => ({
  svg: "",
  setSvg: (svg) => set({ svg }),
}));

export default useSvgStore;
