import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MobileBottomBar } from "./components/MobileBottomBar";
import { SignIn } from "./pages/SignIn";
import { useAuthentication } from "./hooks/useAuthentication";
import { Register } from "./pages/Register";
import { configure } from "./config";
import { Projects } from "./pages/Projects";

configure();

export const App = () => {
    const user = useAuthentication();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            {user?.email && user.name && user.access_token && user.refresh_token ? (
                <MobileBottomBar />
            ) : null}
        </>
    );
}
