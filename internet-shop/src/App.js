import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'normalize.css';

import './App.css';

import Header from "./components/header/Header";
import Basket from "./components/pages/basket/Basket";
import Catalog from "./components/pages/catalog/Catalog";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/catalog' element={ <Catalog /> }/>
          <Route path='/basket' element={ <Basket /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
