import css from './style.module.css'

const Header = ({title, descr, onClickButton}) => {
    const handleClick = () =>{
    console.log('####: <Header />');
        onClickButton && onClickButton('game');
    }
    return (
        <div>
            <header className={css.root}>
                <div className={css.forest}></div>
                <div className={css.container}>
                    <h1>{title}</h1>
                    <p>{descr}</p>

                    <button onClick={handleClick}>Start Game</button>

                </div>
            </header>
        </div>
    );
};

export default Header;
