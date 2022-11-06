import './App.scss';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { Cart } from './components/Cart';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { Products } from '../src/components/Products';
import {
  Row,
  Col
 } from "reactstrap";
<link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'></link>

const App = () => {
  const [data, setData] = useState(null);
  const [openCart, setopenCart] = useState(false);
  const [cart, setCart] = useState([]);

  const setCartVisibilty = (item) => {
    if(item === 'true'){
      setopenCart(false)
    } else {
      setopenCart(true);
    }
  }

  const sortData = (param) => {
    const updatedData = [...data]
    if( param === 'byMin' ) {
      updatedData.sort((a, b) => a.price - b.price);
    } 
    if( param === 'byMax' ) {
     updatedData.sort((a, b) => b.price - a.price);
    }
    setData(updatedData);
  }

  useEffect(() => {

  let url = `http://localhost:3004/items`

    fetch(url)
    .then(response=>response.json())
    .then(responsedData => {
      setData(responsedData)
    });
}, [])

  const onAddToCart = (product) => {
    const updatedCart= [...cart]
    const cartItem = cart.find((item) => item.slug === product.slug)
      if(cartItem) {
        const index = cart.findIndex((item) => item.slug === product.slug);
        updatedCart[index].quantity+=1
        setCart(updatedCart)
      } else {
        setCart([...cart, {...product, quantity:1}])
      }
  }

  const onRemoveFromCart = (product) => {
    let updatedCart= [...cart]
    if(product.quantity > 1){
      const index = cart.findIndex((item) => item.slug === product.slug);
      updatedCart[index].quantity-=1
    } else {
      updatedCart = cart.filter((item) => product.slug !== item.slug)
    } 
    setCart(updatedCart);
  }

  return (
    <div className="App">
      <Header openCart = {openCart} setCartVisibilty = {setCartVisibilty}/>
      <Row className="content">
        <Col xl={3}>
          <Filters sortData = {sortData}/>
        </Col>
        <Col xl={6}>
          <Products data = {data} onAddToCart = {onAddToCart}/>
        </Col>
        <Col xl={3}>
          <Cart openCart = {openCart} cart = {cart} onAddToCart = {onAddToCart} onRemoveFromCart = {onRemoveFromCart}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
