import './App.css';
import {Header} from "./components/Header/Header";
import {Layout} from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

import bg1 from './assest/bg1.jpg';

console.log(bg1);

function App() {
  return (
     <div>
      <Header title="This is title" descr="This is Description!"/>
      <Layout title={"This is title"} descr={"This is Description!"}/>
      <Layout/>
      <Layout />
      <Footer/>
    </div>
  );
}

export default App;
