import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProjectStore = create(
  persist((set) => ({
    project: [],

    addProject: (name) =>
      set((state) => ({
        project: [
          ...state.project,
          {
            id: crypto.randomUUID(),
            name: name,
          },
        ],
      })),
  }))
);
export default useProjectStore;
