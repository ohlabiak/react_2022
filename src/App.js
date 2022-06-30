import './App.css';
import './index.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';

function App() {
  return (
     <div>
      <Header title="Header title" descr="Title Description!"/>
      <Layout title="Layout 1 Title" descr="Description 1" urlBg={bg1}/>
      <Layout title="Layout 2 Title" descr="Description 2" colorBg="#e2e2e2"/>
      <Layout title="Layout 3 Title" descr="Description 3" urlBg={bg2}/>
      <Footer/>
    </div>
  );
}

export default App;
