
const GamePage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage();
    }
    return (
        <div>
            <button onClick={handleClick}>To Home Page</button>
        </div>
    );
};

export default GamePage;