import { create } from "zustand";

export interface StoreState {
  openMenu: boolean;
  profileMenu: boolean;
}

export const useStore = create((set) => ({
  openMenu: false,
  toggleMenu: () => set((state: StoreState) => ({ openMenu: !state.openMenu })),
  toggleProfileMenu: () => set
}));
