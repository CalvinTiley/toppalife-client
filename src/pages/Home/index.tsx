import { TodaysTasks } from "../../components/TodaysTasks";
import { UserGreeting } from "../../components/UserGreeting";
import { mockTasks } from "../../mockData/tasks";

export const Home = () => {
    return (
        <main className="page-home">
            <UserGreeting />

            <TodaysTasks tasks={mockTasks} />
        </main>
    );
};
