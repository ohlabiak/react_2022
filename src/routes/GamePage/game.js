import css from "./style.module.css";

const GamePage = ({ onChangePage }) => {
    const handleClick = () => {
        onChangePage && onChangePage("app");
    };
    return (
        <div className={css.root}>
            <div className={css.container}>
                <button onClick={handleClick}>To Home Page</button>
            </div>
        </div>
    );
};

export default GamePage;
