import cn from "classnames";

import css from "./style.module.css";

const Navbar = ({ isOpen, bgActive = false, onMenuOpenClose }) => {
    const handleClick = () => {
        onMenuOpenClose && onMenuOpenClose();
    };
    return (
        <nav className={cn(css.root, { [css.bgActive]: bgActive })}>
            <div className={css.navWrapper}>
                <p className={css.brand}>LOGO</p>
                <div>
                    onClick={handleClick}
                    className={cn(css.menuButton, { [css.active]: isOpen })}
                    <span />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
