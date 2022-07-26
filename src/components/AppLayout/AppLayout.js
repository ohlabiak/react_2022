import { Outlet, useMatch } from "react-router-dom";

import MenuHeader from "../MenuHeader/MenuHeader";
import Footer from "../Footer/Footer";
import css from "./style.module.css";
import cn from "classnames";

const AppLayout = () => {
    const isHomePage = useMatch("/");

    return (
        <>
            <MenuHeader bgActive={isHomePage === null} />
            <main>
                <div
                    className={cn(css.wrap, {
                        [css.isHomePage]: isHomePage === null ? false : true,
                    })}
                >
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default AppLayout;
