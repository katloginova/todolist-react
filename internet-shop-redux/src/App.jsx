import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Catalog from "./components/pages/catalog/Catalog";
import Home from "./components/pages/home/Home";
import ProductDetails from "./components/pages/catalog/productDetails/ProductDetails";
import Basket from "./components/pages/basket/Basket";
import 'normalize.css';
import './App.css';


function App () {

  return (
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

  );
}

export default App;
