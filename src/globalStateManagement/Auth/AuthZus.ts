import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface AuthStore {
  user: string;
  login: (user: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (user) => set({ user }),
  logout: () => set({ user: "" }),
}));

// درست برای Vite
if (import.meta.env.DEV) {
  mountStoreDevtool("AuthStore", useAuthStore);
}

export default useAuthStore;
