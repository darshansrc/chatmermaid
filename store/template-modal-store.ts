import { create } from "zustand";

interface authModalStore {
  isTemplateModalOpen: boolean;
  setIsTemplateModalOpen: (open: boolean) => void;
}

const useTemplateModal = create<authModalStore>((set) => ({
  isTemplateModalOpen: false,
  setIsTemplateModalOpen: (open) => set({ isTemplateModalOpen: open }),
}));

export default useTemplateModal;
