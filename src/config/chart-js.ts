import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

export const configureChartJS = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
}
