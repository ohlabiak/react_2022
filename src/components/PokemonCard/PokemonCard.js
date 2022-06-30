import css from './style.module.css';
import cardBackSide from './assets/card-back-side.jpg';

const PokemonCard = ({name, img, id, type, values}) => {

    return (
        <div className={css.root}>
            <div className={css.pokemonCard}>
                <div className={css.cardFront}>
                    <div className={`${css.wrap} ${css.front}`}>
                        <div className={css.pokemon}>
                            <div className={css.values}>
                                <div className={`${css.count} ${css.top}`}>{values.top}</div>
                                <div className={`${css.count} ${css.right}`}>{values.right}</div>
                                <div className={`${css.count} ${css.bottom}`}>{values.bottom}</div>
                                <div className={`${css.count} ${css.left}`}>{values.left}</div>
                            </div>
                            <div className={css.imgContainer}>
                                <img src={img} alt="{name}"/>
                            </div>
                            <div className={css.info}>
                                <span className={css.number}>#{id}</span>
                                <h3 className={css.name}>{name}</h3>
                                <small className={css.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.cardBack}>
                    <div className={`${css.wrap} ${css.back}`}>
                        <img src={cardBackSide} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PokemonCard;