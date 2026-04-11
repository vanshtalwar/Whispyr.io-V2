import { create } from "zustand";

const FIXED_THEME = "coffee";
localStorage.setItem("chat-theme", FIXED_THEME);

export const useThemeStore = create(() => ({
  theme: FIXED_THEME,
  setTheme: () => {},
}));
