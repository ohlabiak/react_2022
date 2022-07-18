import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import cn from "classnames";

import AboutPage from "./routes/AboutPage/AboutPage";
import ContactPage from "./routes/ContactPage/ContactPage";
import HomePage from "./routes/HomePage/home";
import GamePage from "./routes/GamePage/game";
import NotFound from "./routes/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import MenuHeader from "./components/MenuHeader/MenuHeader";

import css from "./style.module.css";

const App = () => {
    const location = useLocation();
    const isHomePage =
        location.pathname === "/" || location.pathname === "/home";
    return (
        <>
            <MenuHeader bgActive={!isHomePage} />
            <div
                className={cn(CSS.wrap, {
                    [css.isHomePage]: isHomePage,
                })}
            >
                <Routes>
                    <Route index element={<Navigate to={"/home"} />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/game" element={<GamePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
