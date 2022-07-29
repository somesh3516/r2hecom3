
import './App.css';

import React from 'react';
import Footer from './components/Footer';
function App() {
return (
	<Footer />
);
}





import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

//screens import
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Product from './components/Product';
//components import
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/Sidedrawer';
function App() {
  return (
   <Router>
    <SideDrawer/>
    <Backdrop />
    <Navbar />
    <Product/>
 

	<Footer />


<main>
  <Routes>
  <Product/>
    <Route exact path ='/' element={<HomeScreen/>}/>
    <Route exact path="/product/:id" element={<ProductScreen/>}/>
    <Route exact path="/cart"element={<CartScreen/>}/>
  </Routes>
</main>
<Footer />
</Router>



  );
}

export default App;
