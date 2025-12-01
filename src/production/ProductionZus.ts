import { create } from "zustand";
import type { Product } from "../apis/posts";

interface UseProductionStore {
  pro: Product[];
  login: (task: Product) => void;
}

export const useProductionStore = create<UseProductionStore>((set) => ({
  pro: [],

  login: (task) =>
    set((state) => ({
      pro: [...state.pro, task],
    })),
}));
