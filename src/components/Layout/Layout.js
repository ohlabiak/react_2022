import css from './style.module.css';

const Layout = ({title, descr}) => {
    // const divStyle = {
    //     backgroundImage: 'url()',
    // };
    return (
        <div>
            <section className="root">
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