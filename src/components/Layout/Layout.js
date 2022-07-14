import css from './style.module.css';
import cn from 'classnames';

const Layout = ({title, descr, urlBg, colorBg, children}) => {
    const bgStyle = urlBg
        ? {backgroundImage: `url(${urlBg})`}
        : {backgroundColor: colorBg}

    return (
        <div>
            <section className={css.root} style={bgStyle}>
                <div className={css.wrapper}>
                    <article>
                        <div className={css.title}>
                            <h3>
                                {title}
                            </h3>
                            <span className={css.separator}></span>
                        </div>
                        <div className={cn(css.desc, css.full)}
                        >
                            <p>
                                {descr}
                            </p>
                            <div>
                                {children}
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Layout;
