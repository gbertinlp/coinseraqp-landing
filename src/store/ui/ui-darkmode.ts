import { create } from 'zustand';

interface UIDarkMode  {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useUIDarkMode = create<UIDarkMode>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => {
    const newDarkMode = !state.isDarkMode;
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { isDarkMode: newDarkMode };
  }),
}));
