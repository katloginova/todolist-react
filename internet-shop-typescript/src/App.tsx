import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Context from "./context";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Catalog from "./components/pages/catalog/Catalog";
import 'normalize.css';
import './App.css';
import { typesOrderedProduct } from "./helpers/typesOrderedList";



function App () {
  let [ listOrderedProducts, setListOrderedProducts ] = useState<Array<typesOrderedProduct>>( [] );
  const [ countProducts, setCountProducts ] = useState<number>( 0 );
  const [ countTotal, setCountTotal ] = useState<number>( 0 );


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
          </Routes>

          <Footer ></Footer>
        </Router>
      </div>

    </Context.Provider>
  );
}

export default App;
