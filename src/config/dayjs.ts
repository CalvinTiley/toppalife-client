import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

export const configureDayJS = () => {
    dayjs.extend(isToday);
}