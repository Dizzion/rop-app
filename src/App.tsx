import React from 'react';
import Header from './Components/Header';
import Card from './Components/TeamCards/Card';
import './App.scss';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container fluid>
        <Row>
          <Col sm><Card/></Col>
          <Col sm><Card/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
