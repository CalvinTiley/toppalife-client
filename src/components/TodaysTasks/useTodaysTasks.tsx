import { Chart, Plugin } from "chart.js";
import dayjs from "dayjs";
import { Task } from "../../types/task";

const getTodaysCompletedTasksPercentage = (tasks: Task[]) => {
    const todaysCompletedTasks = tasks.filter(task => (
        dayjs(task.due_date).isToday() && task.current === task.total
    ));

    return Math.round((todaysCompletedTasks.length / tasks.length) * 100);
};

const addCenterLabel = (
    chart: Chart,
    completedPercentage: number,
) => {
    const { width, height, ctx } = chart;
    ctx.restore();

    ctx.textBaseline = "top";
    ctx.fillStyle = "#c699e3";

    const text = `${completedPercentage}%`;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
};

const generatePlugins = (completedPercentage: number): Plugin<"doughnut">[] => {
    return [{
        id: "doughnut-chart",
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
            backgroundColor: ["#c699e3", "#302C42"],
        }],
    };
};

export const useTodaysTasks = (tasks: Task[]) => {
    const completedPercentage = getTodaysCompletedTasksPercentage(tasks);
    const plugins = generatePlugins(completedPercentage);
    const data = generateData(completedPercentage);

    return {
        plugins,
        data,
    };
};