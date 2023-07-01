import { TodaysTasks } from "../../components/TodaysTasks";
import { UserGreeting } from "../../components/UserGreeting";

export const Home = () => {
    return (
        <main className="page-home">
            <UserGreeting />

            <TodaysTasks />
        </main>
    );
};
