import { create } from "zustand";

export interface StoreState {
  openMenu: boolean;
  profileMenu: boolean;
}

interface ModalStore {
  isOpen: boolean;
  toggleModal: () => void;
}


export const useModalStore = create((set) => ({
  isOpen: false ,
  toggleModal: () => set((state: ModalStore) => ({ isOpen: !state.isOpen })),
}));



export const useStore = create((set) => ({
  openMenu: false,
  profileMenu: false, // Assuming you want to initialize profileMenu to false
  toggleMenu: () => set((state: StoreState) => ({ openMenu: !state.openMenu })),
  toggleProfileMenu: () => set((state: StoreState) => ({ profileMenu: !state.profileMenu })),
}));
