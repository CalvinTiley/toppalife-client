import { Button } from "../Button";
import { Card } from "../Card";
import { Donut } from "../Donut";

export const TodaysTasks = () => {
    return (
        <Card className="todays-tasks">
            <div className="todays-tasks__text">
                <p className="todays-tasks__progress">You have tasks to do today!</p>

                <Button className="button--todays-tasks" variant="secondary">
                    View Tasks
                </Button>
            </div>

            <div className="todays-tasks__completion">
                <Donut value={10} valueLabel="Completed" className="donut--todays-tasks" size={100} />
            </div>
        </Card>
    );
};