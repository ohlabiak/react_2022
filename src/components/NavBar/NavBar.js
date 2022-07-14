import cn from 'classnames';

import css from "./style.modyle.css";

const Navbar = ({ isActive, onClickButon }) => {
    const handleClick = () => {
        console.log('####: <Navbar />');
        onClickButon && onClickButon();
    };
    return (
        <nav className={css.root}>
            <div className={css.navWrapper}>
                <p className={css.brand}>
                    LOGO
                </p>
                <a href="/#" onClick={handleClick} className={cn(css.menuButton, {[css.active]: isActive})}>
                    <span />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
