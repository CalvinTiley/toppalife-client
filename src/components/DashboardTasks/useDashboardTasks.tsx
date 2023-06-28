import { Task } from "../../types/task";

export const useDashboardTasks = (tasks: Task[]) => {
    const notStartedTasks = {
        key: "not-started",
        label: "Not Started",
        items: tasks.filter(task => task.current === 0),
    };

    const inProgressTasks = {
        key: "in-progress",
        label: "In Progress",
        items: tasks.filter(task => task.current > 0 && task.current < task.total),
    };

    const completedTasks = {
        key: "completed",
        label: "Completed",
        items: tasks.filter(task => task.current === task.total),
    };

    return [
        notStartedTasks,
        inProgressTasks,
        completedTasks,
    ];
}