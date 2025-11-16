import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProjectsStore = create(
  persist((set) => ({
    projects: [],
    activeProjectId: null,

    setActiveProject: (id) => set({ activeProjectId: id }),

    addProject: (name) =>
      set((state) => ({
        projects: [
          ...state.projects,
          {
            id: crypto.randomUUID(),
            name: name,
            tasks: [],
          },
        ],
      })),

    addTask: (projectId, data) =>
      set((state) => {
        const projectExists = state.projects.find((p) => p.id === projectId);

        if (!projectExists) return state;

        const newTask = {
          id: crypto.randomUUID(),
          title: data.title,
          description: data.description,
          type: data.type,
          priority: data.priority,
        };

        const updatedProjects = state.projects.map((item) =>
          item.id === projectId
            ? { ...item, tasks: [...item.tasks, newTask] }
            : item
        );

        return { ...state, projects: updatedProjects };
      }),
  }))
);
export default useProjectsStore;
