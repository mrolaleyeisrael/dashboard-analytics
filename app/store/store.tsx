import { create } from "zustand";

export interface StoreState {
  openMenu: boolean;
}

export const useStore = create((set) => ({
  openMenu: false,
  toggleMenu: () => set((state: StoreState) => ({ openMenu: !state.openMenu })),
}));
