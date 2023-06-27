import { Tag } from "./tag";

export interface Task {
    due_date: string;
    tags?: Tag[];
    title: string;
}