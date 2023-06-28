import { DashboardTasks } from "../../components/DashboardTasks";
import { TodaysTasks } from "../../components/TodaysTasks";
import { UserGreeting } from "../../components/UserGreeting";

import { tasks } from "../../mockData/tasks";

export const Home = () => {
    return (
        <main className="page-home">
            <UserGreeting />

            <TodaysTasks />

            <DashboardTasks tasks={tasks} />
        </main>
    );
};
