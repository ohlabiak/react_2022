import { useState } from "react";
import { useNavigate } from "react-router-dom";

import css from "./style.module.css";

import POKEMONS from "../../consts";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const GamePage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };
    const [pokemons, setPokemons] = useState(POKEMONS);
    // const [activeCards, setActiveCards] = useState([]);
    const handleCardClick = (id) => {
        // setActiveCards(activeCards => ([...activeCards, id]))
        // setPokemons(pokemons => pokemons.map(el => el.id === id ? {...el, active: true} : el));
        setPokemons((pokemons) =>
            pokemons.map((el) => {
                if (el.id === id) el.active = true;
                return el;
            })
        );
    };
    return (
        <div className={css.root}>
            <div className={css.flex}>
                <div className={css.wrapper}>
                    <div className={css.text}>This is the GamePage!</div>
                    <button
                        className={css["switch-button"]}
                        onClick={handleClick}
                    >
                        To Home Page
                    </button>
                </div>
                <div className={css.flex}>
                    {pokemons.map(
                        (item) =>
                            item.id && (
                                <PokemonCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    img={item.img}
                                    type={item.type}
                                    isActive={item.active}
                                    values={item.values}
                                    onCardClick={handleCardClick}
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    );
};
export default GamePage;
