import dayjs from "dayjs";
import { Task } from "../types/task";

export const tasks: Task[] = [
    {
        due_date: dayjs().format("dddd, MM, YYYY"),
        priority: "High",
        title: "Have Dinner",
        current: 10,
        total: 100,
        tags: [
            "Lifestyle",
            "Food",
        ],
    },
    {
        due_date: dayjs().format("dddd, MM, YYYY"),
        priority: "Medium",
        title: "Walk dog",
        current: 0,
        total: 100,
        tags: [
            "Lifestyle",
            "Pets",
        ],
    },
    {
        due_date: dayjs().format("dddd, MM, YYYY"),
        priority: "Low",
        title: "Complete essay",
        current: 100,
        total: 100,
        tags: [
            "School",
        ],
    },
    {
        due_date: dayjs().format("dddd, MM, YYYY"),
        priority: "Low",
        title: "Fix door",
        current: 100,
        total: 100,
        tags: [
            "Home",
            "Food",
        ],
    },
    {
        due_date: dayjs().format("dddd, MM, YYYY"),
        priority: "High",
        title: "Go for run",
        current: 0,
        total: 100,
        tags: [
            "Lifestyle",
            "Fitness",
        ],
    },
    {
        due_date: dayjs().format("dddd, MM, YYYY"),
        priority: "High",
        title: "Go for run",
        current: 100,
        total: 100,
        tags: [
            "Lifestyle",
            "Fitness",
        ],
    },
    {
        due_date: dayjs().format("dddd, MM, YYYY"),
        priority: "Medium",
        title: "Complete essay",
        current: 90,
        total: 100,
        tags: [
            "School",
        ],
    },
    {
        due_date: dayjs().format("dddd, MM, YYYY"),
        priority: "Medium",
        title: "Complete essay",
        current: 0,
        total: 100,
        tags: [
            "School",
        ],
    },
    {
        due_date: dayjs().format("dddd, MM, YYYY"),
        priority: "High",
        title: "Have Dinner",
        current: 0,
        total: 100,
        tags: [
            "Lifestyle",
            "Food",
        ],
    },
];