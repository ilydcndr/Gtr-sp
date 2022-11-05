import './App.scss';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { Card } from './components/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { Products } from '../src/components/Products';
import {
  Row,
  Col
 } from "reactstrap";
<link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'></link>

const App = () => {
  const [data, setdata] = useState(null);

  useEffect(() => {

  let url = `http://localhost:3004/items`

    fetch(url)
    .then(response=>response.json())
    .then(responsedData => {
      setdata(responsedData)
    });
}, [])

  return (
    <div className="App">
      <Header/>
      <Row className="content">
        <Col xl={3}>
          <Filters/>
        </Col>
        <Col xl={6}>
          <Products allData = {data}/>
        </Col>
        <Col xl={3}>
          <Card/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
