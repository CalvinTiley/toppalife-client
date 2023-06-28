import classNames from "classnames";
import { Task } from "../../types/task";
import { Card } from "../Card";
import { Tags } from "../Tags";
import { useDashboardTasks } from "./useDashboardTasks";

interface DashboardTasksProps {
    tasks: Task[];
}

export const DashboardTasks = ({
    tasks = [],
}: DashboardTasksProps) => {
    const taskLists = useDashboardTasks(tasks);

    return (
        <div className="dashboard-tasks">
            {taskLists.map(taskList => (
                <div className="dashboard-tasks__container">
                    <h2
                        className="dashboard-tasks__heading"
                        id={`dashboard-task-container-${taskList.key}`}
                    >
                        {taskList.label}
                    </h2>

                    <ul
                        aria-labelledby={`dashboard-task-container-${taskList.key}`}
                        className={`dashboard-tasks__list dashboard-tasks__list--${taskList.key}`}
                    >
                        {taskList.items.map(task => (
                            <Card className={classNames("card--task", `card--${taskList.key}`)}>
                                {task.tags?.length ? (
                                    <Tags items={task.tags} />
                                ) : null}

                                <div className="card__content">
                                    <h3 className="card__heading">{task.title}</h3>
                                </div>

                                <div className="card__progress">
                                    <div
                                        className="card__progress-inner"
                                        style={{ transform: `scaleX(${task.current / task.total})` }}
                                    ></div>
                                </div>
                            </Card>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};