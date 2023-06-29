import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MobileBottomBar } from "./components/MobileBottomBar";
import { SignIn } from "./pages/SignIn";
import { useAuthentication } from "./hooks/useAuthentication";

export const App = () => {
    const user = useAuthentication();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>

            {user?.email && user.name && user.accessToken && user.refreshToken ? (
                <MobileBottomBar />
            ) : null}
        </>
    );
}
