import {useState} from "react";
import HomePage from "./routes/Home/home";
import GamePage from "./routes/Game/game";

const App = () => {
    const [page, setPage] = useState('app');

    const handleChangePage = () => {
        console.log('####: <Main/>')
        setPage('game')
    }
    
    switch (page){
        case "app":
            return <HomePage onChangePage={handleChangePage}/>
        case "game":
            return <GamePage/>
        default:
            return <HomePage/>
    }
};

export default App;