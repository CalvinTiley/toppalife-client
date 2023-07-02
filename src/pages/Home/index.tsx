import { TodaysTasks } from "../../components/TodaysTasks";
import { UserGreeting } from "../../components/UserGreeting";
import { mockTasks } from "../../mockData/tasks";

export const Home = () => {
    return (
        <main className="page-home">
            <h1 className="page-home__title">Dashboard</h1>

            <UserGreeting />

            <TodaysTasks tasks={mockTasks} />
        </main>
    );
};
