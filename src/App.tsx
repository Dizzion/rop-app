import React, { useState } from 'react';
import Header from './Components/Header';
import Card from './Components/TeamCards/Card';
import './App.scss';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';

const App: React.FC = () => {
  const [members, setMembers] = useState<{id: string, troopTier: number, marchSize: number, rallySize: number, fighters: {attack: number, defense: number, health: number}, shooters: {attack: number, defense: number, health: number}, rider: {attack: number, defense: number, health: number}}[]>([]);

  const memberAddHandler = (member: object) => {
    setMembers([])
  };

  return (
    <div className="App">
      <Header/>
      <div>
        <h2>Add Member</h2>
        <ListGroup>
          <ListGroup.Item>Game ID: </ListGroup.Item>
          <ListGroup.Item>Troop Tier: </ListGroup.Item>
          <ListGroup.Item>March Size: </ListGroup.Item>
          <ListGroup.Item>Rally Size: </ListGroup.Item>
          <ListGroup.Item>Fighter Stats: Attack:   Defense:  Health:  </ListGroup.Item>
          <ListGroup.Item>Shooter Stats: Attack:   Defense:  Health:  </ListGroup.Item>
          <ListGroup.Item>Rider Stats: Attack:   Defense:  Health:  </ListGroup.Item>
        </ListGroup>
        <Button>Sort Members</Button>
      </div>
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
