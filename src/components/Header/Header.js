import css from './style.module.css'

const Header = ({title, descr}) => {
    return (
        <div>
            <header className={css.root}>
                <div className={css.forest}></div>
                <div className={css.container}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                </div>
            </header>
        </div>
    );
};

export default Header;