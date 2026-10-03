import { Routes, Route } from "react-router-dom";

import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Daily from "./pages/Daily";
import Love from "./pages/Love";
import Work from "./pages/Work";
import ThreeCards from "./pages/ThreeCards";
import Money from "./pages/Money";

function App() {
    return (
        <>
            <Background />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/love" element={<Love />} />
                <Route path="/work" element={<Work />} />
                <Route path="/money" element={<Money />} />
                <Route path="/three-cards" element={<ThreeCards />} />
            </Routes>
        </>
    );
}

export default App;
