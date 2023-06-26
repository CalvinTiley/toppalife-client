import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MobileBottomBar } from "./components/MobileBottomBar";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <MobileBottomBar />
        </>
    );
}

export default App;
