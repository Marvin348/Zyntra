import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProjectsStore = create(
  persist(
    (set) => ({
      projects: [],
      activeProjectId: null,
      editTaskId: null,

      setActiveProject: (id) => set({ activeProjectId: id }),

      setEditTask: (taskId) => set({ editTaskId: taskId }),
      clearEditTask: () => set({ editTaskId: null }),

      updateTask: (projectId, taskId, updatedValues) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === projectId
              ? {
                  ...project,
                  tasks: project.tasks.map((task) =>
                    task.id === taskId ? { ...task, ...updatedValues } : task
                  ),
                }
              : project
          ),
        })),

      addProject: (name) =>
        set((state) => {
          const id = crypto.randomUUID();
          return {
            projects: [...state.projects, { id, name, tasks: [] }],
            activeProjectId: id,
          };
        }),

      deleteProject: (projectId) =>
        set((state) => {
          const updated = state.projects.filter((p) => p.id !== projectId);

          const newActive =
            state.activeProjectId === projectId
              ? updated[0]?.id || null
              : state.activeProjectId;

          return {
            projects: updated,
            activeProjectId: newActive,
          };
        }),

      deleteAllProjects: () =>
        set((state) => ({
          projects: [],
          activeProjectId: null,
        })),

      deleteTask: (taskId, projectId) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === projectId
              ? {
                  ...project,
                  tasks: project.tasks.filter((t) => t.id !== taskId),
                }
              : project
          ),
        })),

      updateTaskStatus: (taskId, projectId, newStatus) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === projectId
              ? {
                  ...p,
                  tasks: p.tasks.map((task) =>
                    task.id === taskId ? { ...task, status: newStatus } : task
                  ),
                }
              : p
          ),
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
            status: "todo",
          };

          const updatedProjects = state.projects.map((item) =>
            item.id === projectId
              ? { ...item, tasks: [...item.tasks, newTask] }
              : item
          );

          return { ...state, projects: updatedProjects };
        }),
    }),

    {
      name: "projects-storage",
      partialize: (state) => ({
        projects: state.projects,
        activeProjectId: state.activeProjectId,
      }),
    }
  )
);
export default useProjectsStore;
