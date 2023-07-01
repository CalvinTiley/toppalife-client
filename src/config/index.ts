import { configureChartJS } from "./chart-js"
import { configureDayJS } from "./dayjs";

export const configure = () => {
    configureChartJS();
    configureDayJS();
}