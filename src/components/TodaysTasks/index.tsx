import { Button } from "../Button";
import { Donut } from "../Donut";

export const TodaysTasks = () => {
    return (
        <div className="todays-tasks">
            <div className="todays-tasks__text">
                <p className="todays-tasks__progress">You have tasks to do today!</p>

                <Button className="button--todays-tasks" variant="secondary">
                    View Tasks
                </Button>
            </div>

            <div className="todays-tasks__completion">
                <Donut value={10} valueLabel="Completed" className="donut--todays-tasks" size={100} />
            </div>
        </div>
    );
};