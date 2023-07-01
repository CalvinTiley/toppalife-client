import { useMemo } from "react";
import { Chart, Plugin } from "chart.js";
import dayjs from "dayjs";
import { Task } from "../../types/task";

const getTodaysCompletedTasks = (tasks: Task[]) => {
    const todaysTasks = tasks.filter(task => dayjs(task.due_date).isToday());
    const todaysCompletedTasks = todaysTasks.filter(task => task.current === task.total);

    return {
        remaining: todaysTasks.length - todaysCompletedTasks.length,
        percentage: Math.round((todaysCompletedTasks.length / todaysTasks.length) * 100),
    };
};

const addCenterLabel = (
    chart: Chart,
    completedPercentage: number,
) => {
    const { width, height, ctx } = chart;
    ctx.restore();

    ctx.textBaseline = "top";
    ctx.fillStyle = completedPercentage === 100 ? "#00dd6f" : "#c699e3";

    const text = `${completedPercentage}%`;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
};

const generatePlugins = (completedPercentage: number): Plugin<"doughnut">[] => {
    return [{
        id: "todays-tasks-doughnut-chart",
        beforeDraw(chart) {
            addCenterLabel(chart, completedPercentage);
        },
    }];
};

const generateData = (completedPercentage: number) => {
    return {
        datasets: [{
            label: "",
            data: [completedPercentage, 100 - completedPercentage],
            backgroundColor: [completedPercentage === 100 ? "#00dd6f" : "#c699e3", "#302C42"],
        }],
    };
};

export const useTodaysTasks = (tasks: Task[]) => useMemo(() => {
    const { remaining, percentage } = getTodaysCompletedTasks(tasks);
    const data = generateData(percentage);
    const plugins = generatePlugins(percentage);

    return {
        data,
        plugins,
        remaining,
    };
}, [tasks]);