import cn from "classnames";
import { Link } from "react-router-dom";

import css from "./style.module.css";

const MENU = [
    {
        title: "HOME",
        to: "",
    },
    {
        title: "GAME",
        to: "game",
    },
    {
        title: "ABOUT",
        to: "about",
    },
    {
        title: "CONTACT",
        to: "contact",
    },
];

const Menu = ({ isOpen, onMenuOpenClose }) => {
    // const handleClick = () => {
    //     onMenuOpenClose && onMenuOpenClose();
    // };
    return (
        <div
            className={cn(css.menuContainer, {
                [css.active]: isOpen,
                [css.deactive]: isOpen === false,
            })}
        >
            <div className={css.overlay} />
            <div className={css.menuItems} onClick={onMenuOpenClose}>
                <div>
                    <ul>
                        {MENU.map((menu) => (
                            <li key={menu.to}>
                                <Link to={menu.to} children={menu.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;
