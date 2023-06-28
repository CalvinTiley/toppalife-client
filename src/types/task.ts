export interface Task {
    current: number;
    due_date: string;
    priority: "Very High" | "High" | "Medium" | "Low" | "Very Low";
    tags?: string[];
    title: string;
    total: number;
}