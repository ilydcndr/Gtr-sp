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
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {

  let url = `http://localhost:3004/items`

    fetch(url)
    .then(response=>response.json())
    .then(responsedData => {
      setData(responsedData);
    });
  }, [])

  const totalPrice = () => {
    let total = 0;
    cart.forEach(item => {
      let quantity = item.quantity;
      let perPrice = item.price;
      setTotal(total += quantity * perPrice);
    });
  };

  const sortData = (param) => {
    const updatedData = [...data]
    if( param === 'byMin' ) {
      updatedData.sort((a, b) => a.price - b.price);
    } 
    if( param === 'byMax' ) {
      updatedData.sort((a, b) => b.price - a.price);
    }
    if( param === 'byNew' ) {
      updatedData.sort((a, b) => new Date(a.added) - new Date(b.added));
    } else {
      updatedData.sort((a, b) => new Date(b.added) - new Date(a.added));
    }
    setData(updatedData);
  }

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
      totalPrice();
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
    totalPrice();
  }

  return (
    <div className="App">
      <Header total = {total}/>
      <Row className="content">
        <Col xl={3}>
          <Filters sortData = {sortData}/>
        </Col>
        <Col xl={6}>
          <Products data = {data} onAddToCart = {onAddToCart}/>
        </Col>
        <Col xl={3}>
          <Cart cart = {cart} onAddToCart = {onAddToCart} onRemoveFromCart = {onRemoveFromCart} total = {total}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
