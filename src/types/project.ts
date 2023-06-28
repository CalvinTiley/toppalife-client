import { Task } from "./task";

export interface Project {
    tasks: Task[];
    title: string;
}