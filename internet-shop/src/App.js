import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Basket from "./components/pages/basket/Basket";
import Catalog from "./components/pages/catalog/Catalog";
import Home from "./components/pages/home/Home";
import ProductDetails from "./components/pages/catalog/productDetails/ProductDetails";
import { useState } from "react";

import 'normalize.css';
import './App.css';

function App () {
  let [ listOrderedProducts, setListOrderedProducts ] = useState( [] );
  const [ count, setCount ] = useState( listOrderedProducts.length );

  
 /** events */ 
  function addProductToBasket ( e ) {
    let idProduct;

    switch ( true ) {
      case ( e.target.closest( '.card' ) !== null):
        idProduct = getIdProduct( e.target, 'card' );
        break;
      
      case ( e.target.closest( '.product-details' ) !== null ):
        idProduct = getIdProduct( e.target, 'product-details' );
        break;
      
      default:
        break;
    }

    
    const orderedProduct = createOrderedProduct( idProduct );

    if ( !isProduct( orderedProduct ) ) {
      listOrderedProducts.push( orderedProduct );
    } else {
      listOrderedProducts = changeCountProduct( listOrderedProducts, idProduct );
      setListOrderedProducts( listOrderedProducts );
    }
    
    setCount( listOrderedProducts.length );

    console.log( idProduct, orderedProduct, listOrderedProducts);
  }

  function changeCountInput ( e ) {
    setCount( e.target.value );
  }

  function deleteItemClick (e) {
    /**delete element */
    const idProduct = getIdProduct( e.target, 'basket-item' );
    listOrderedProducts = deleteProduct( listOrderedProducts, idProduct );

    setListOrderedProducts( listOrderedProducts );

    console.log( 'delete', listOrderedProducts );
  }


/** */
  function getIdProduct ( el, nameClass ) {
    return el.closest( `.${ nameClass }` ).dataset.id;
  }

  function createOrderedProduct ( id ) {
    return {
      id: id,
      countUnits: 1
    }
  }

  function changeCountProduct ( list, id ) {
    return list.map( ( item ) => ( +item.id !== +id ) ? item : { ...item, countUnits: item.countUnits + 1 } );
  }

  function deleteProduct ( list, id ) {
    return list.filter( ( item ) => +item.id !== +id );
  }



  function isProduct ( product ) {
    return listOrderedProducts.some((item) => +item.id === +product.id)
  }


  
  return (
    <div className="App">
      <Router>
        <Header countProducts={ count }/>

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/products' element={ <Catalog selectProduct={ addProductToBasket }/> }/>
          <Route path='/basket' element={ <Basket listProducts={ listOrderedProducts } changeCountInput={ changeCountInput } deleteItemClick={ deleteItemClick }/> } />
          <Route path='/products/:productId' element={<ProductDetails selectProduct={ addProductToBasket }/>}/>
        </Routes> 

        <Footer ></Footer>
      </Router>
    </div>
  );
}

export default App;
