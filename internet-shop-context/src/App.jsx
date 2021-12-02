import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Basket from "./components/pages/basket/Basket";
import Catalog from "./components/pages/catalog/Catalog";
import Home from "./components/pages/home/Home";
import ProductDetails from "./components/pages/catalog/productDetails/ProductDetails";
import constants from "./components/helpers/constants";
import 'normalize.css';
import './App.css';


function App () {
  let [ listOrderedProducts, setListOrderedProducts ] = useState( [] );
  const [ countProducts, setCountProducts ] = useState( listOrderedProducts.length );


  /** events */
  function addProductToBasket ( e ) {
    let idProduct;

    switch ( true ) {
      case ( e.target.closest( `.${ constants.catalogPage.card }` ) !== null ):
        idProduct = getIdProduct( e.target, constants.catalogPage.card );
        break;
      case ( e.target.closest( `.${ constants.productDetails.productDetails }` ) !== null ):
        idProduct = getIdProduct( e.target, constants.productDetails.productDetails );
        break;
      default:
        break;
    }

    const orderedProduct = createOrderedProduct( idProduct );

    if ( !isProductOrder( orderedProduct ) ) {
      listOrderedProducts.push( orderedProduct );
    }
    else {
      listOrderedProducts = changeCountUnits( idProduct );
      setListOrderedProducts( listOrderedProducts );
    }

    setCountProducts( listOrderedProducts.length );
  }

  function changeCountInput ( e ) {
    const idProduct = getIdProduct( e.target, constants.basketPage.basketItem );

    listOrderedProducts = changeCountUnitsInput( idProduct, e.target.value );
    setListOrderedProducts( listOrderedProducts );
  }

  function deleteItemClick ( e ) {
    const idProduct = getIdProduct( e.target, constants.basketPage.basketItem );
    listOrderedProducts = deleteProduct( listOrderedProducts, idProduct );

    setListOrderedProducts( listOrderedProducts );
    setCountProducts( listOrderedProducts.length );
  }


  /** functions for doing with product */
  function getIdProduct ( elem, nameClass ) {
    return elem.closest( `.${ nameClass }` ).dataset.id;
  }

  function createOrderedProduct ( id ) {
    return {
      id: id,
      countUnits: 1
    }
  }

  /** functions for doing with array products */
  function changeCountUnits ( id ) {
    return listOrderedProducts.map( ( item ) =>
      ( +item.id !== +id ) ?
        item : { ...item, countUnits: item.countUnits + 1 } );
  }

  function changeCountUnitsInput ( id, inpValue ) {
    return listOrderedProducts.map( ( item ) =>
      ( +item.id !== +id ) ?
        item : { ...item, countUnits: inpValue } );
  }

  function deleteProduct ( list, id ) {
    return list.filter( ( item ) => +item.id !== +id );
  }

  /** functions for check conditions */
  function isProductOrder ( product ) {
    return listOrderedProducts.some( ( item ) => +item.id === +product.id )
  }


  return (
    <div className="App">
      <Router>
        <Header countProducts={ countProducts } />

        <Routes>
          <Route
            path='/'
            element={ <Home /> }
          />
          <Route
            path='/products'
            element={ <Catalog selectProductClick={ addProductToBasket } /> }
          />
          <Route
            path='/products/:productId'
            element={ <ProductDetails selectProductClick={ addProductToBasket } /> }
          />
          <Route
            path='/basket'
            element={ <Basket
              listProducts={ listOrderedProducts }
              changeCountInput={ changeCountInput }
              deleteItemClick={ deleteItemClick } /> }
          />

        </Routes>

        <Footer ></Footer>
      </Router>
    </div>
  );
}

export default App;
