import { Doughnut } from "react-chartjs-2";
import { Button } from "../Button";
import { Card } from "../Card";
import { useTodaysTasks } from "./useTodaysTasks";
import { Task } from "../../types/task";

interface TodaysTasksProps {
    tasks: Task[];
}

export const TodaysTasks = ({
    tasks,
}: TodaysTasksProps) => {
    const { plugins, data } = useTodaysTasks(tasks);

    return (
        <Card className="todays-tasks">
            <div className="todays-tasks__text">
                <p className="todays-tasks__progress">You have tasks to do today!</p>

                <Button className="button--todays-tasks">
                    View Tasks
                </Button>
            </div>

            <div className="todays-tasks__completion">
                <div className="todays-tasks__chart">
                    <Doughnut plugins={plugins} data={data} />
                </div>
            </div>
        </Card>
    );
};