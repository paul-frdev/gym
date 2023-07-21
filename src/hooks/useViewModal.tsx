import { create } from 'zustand';

interface PreviewModal {
  isOpen: boolean;
  data?: string;
  onClose: () => void;
  onOpen: (data: string) => void;
}

const useViewModal = create<PreviewModal>((set) => ({
  isOpen: false,
  onOpen: (data: string) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useViewModal;
