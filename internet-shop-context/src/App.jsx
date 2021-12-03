import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Context from "./context";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Basket from "./components/pages/basket/Basket";
import Catalog from "./components/pages/catalog/Catalog";
import Home from "./components/pages/home/Home";
import ProductDetails from "./components/pages/catalog/productDetails/ProductDetails";
import 'normalize.css';
import './App.css';


function App () {
  let [ listOrderedProducts, setListOrderedProducts ] = useState( [] );
  const [ countProducts, setCountProducts ] = useState( 0 );
  const [ countTotal, setCountTotal ] = useState( 0 );


  return (
    <Context.Provider value={ {
      countProducts, setCountProducts,
      countTotal, setCountTotal,
      listOrderedProducts, setListOrderedProducts
    } }>

      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/products' element={ <Catalog /> } />
            <Route path='/products/:productId' element={ <ProductDetails /> } />
            <Route path='/basket' element={ <Basket /> } />
          </Routes>

          <Footer ></Footer>
        </Router>
      </div>

    </Context.Provider>
  );
}

export default App;
