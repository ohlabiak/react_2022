import css from './style.module.css';

console.log(css)
const Layout = ({title, descr, urlBg, colorBg}) => {

    const bgStyle = urlBg
        ? {backgroundImage: `url(${urlBg})`}
        : {backgroundColor: colorBg}

    return (
        <div>
            <section className={css.root}
                     style={bgStyle}
            >
                <div className="wrapper">
                    <article>
                        <div className="title">
                            <h3>
                                {title}
                            </h3>
                            <span className="separator"></span>
                        </div>
                        <div className="desc full">
                            <p>
                                {descr}
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export {Layout};