import css from './style.module.css';
import cardBackSide from './assets/card-back-side.jpg';

const PokemonCard = ({...props}) => {
    console.log('####: props', props)
    return (
        <div className={css.root}>
            <div className={css.pokemonCard}>
                <div className={css.cardFront}>
                    <div className={`${css.wrap} ${css.front}`}>
                        <div className={css.pokemon <-- Type Pokemon -->}>
                            <div className={css.values}>
                                <div className={`${css.count} ${css.top}`}><-- Count Value --></div>
                                <div className={`${css.count} ${css.right}`}><-- Count Value --></div>
                                <div className={`${css.count} ${css.bottom}`}><-- Count Value --></div>
                                <div className={`${css.count} ${css.left}`}><-- Count Value --></div>
                            </div>
                            <div className={css.imgContainer}>
                                <img src={<-- Pokemon Picture -->} alt="<-- Name Pokemon -->" />
                            </div>
                            <div className={css.info}>
                                <span className={css.number}>#{<-- ID Pokemon -->}</span>
                                <h3 className={css.name}><-- Name Pokemon --></h3>
                                <small className={css.type}>Type: <span><-- Type Pokemon --></span></small>
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