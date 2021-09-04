//import logo from './logo.svg';
import "./App.css";
import Header from "./myComponents/Header";
import {Todos} from "./myComponents/Todos";
import {Footer} from "./myComponents/Footer";
function App() {
  return (
    <>
    <Header  searchBar={true}/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
