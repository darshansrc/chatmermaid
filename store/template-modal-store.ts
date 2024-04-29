import { create } from "zustand";

interface authModalStore {
  isTemplateModalOpen: boolean;
  setIsTemplateModalOpen: (open: boolean) => void;
  diagramType: string;
  setDiagramType: (type: string) => void;
}

const useTemplateModal = create<authModalStore>((set) => ({
  isTemplateModalOpen: false,
  setIsTemplateModalOpen: (open) => set({ isTemplateModalOpen: open }),
  diagramType: "flowchart",
  setDiagramType: (type) => set({ diagramType: type }),
}));

export default useTemplateModal;
