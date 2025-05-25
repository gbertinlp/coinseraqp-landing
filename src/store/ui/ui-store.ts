import { create } from 'zustand';

interface UIStoreState  {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
}

export const useUIStore = create<UIStoreState>()((set) => ({
  isSideMenuOpen: false,
  toggleSideMenu: () => set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
}))
