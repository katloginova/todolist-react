import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'normalize.css';

import './App.css';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Basket from "./components/pages/basket/Basket";
import Catalog from "./components/pages/catalog/Catalog";
import Home from "./components/pages/home/Home";
import CardProduct from "./components/pages/catalog/CardProduct";
import ProductDetails from "./components/pages/catalog/ProductDetails";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/products' element={ <Catalog /> }/>
          <Route path='/basket' element={ <Basket /> } />
          <Route path='/products/:productId' element={<ProductDetails />}/>
        </Routes> 

        <Footer ></Footer>
      </Router>
    </div>
  );
}

export default App;
