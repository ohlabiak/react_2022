import css from './style.module.css'

import {ReactComponent as ReactLogo} from "../../assest/Stars.svg";

const Header = ({title, descr}) => {
    return (
        <div>
            <header className="root">
                <div className="forest"></div>
                <div className="container">
                    <h1>{title}</h1>
                    <p>{descr}</p>
                </div>
            </header>
        </div>
    );
};

export {Header};