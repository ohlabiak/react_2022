import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";

import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";

import css from "./style.module.css";

const HomePage = () => {
    return (
        <div>
            <Header title="Pokemon Game" descr="Title Description!" />
            <Layout title="Layout 1 Title" descr="Description 1" urlBg={bg1} />
            <Layout
                title="Layout 2 Title"
                descr="Description 2"
                colorBg="#e2e2e2"
            >
                <div className={css.flex}></div>
            </Layout>
            <Layout title="Layout 3 Title" descr="Description 3" urlBg={bg2} />
        </div>
    );
};

export default HomePage;
