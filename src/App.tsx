import React, { useState } from 'react';
import Header from './Components/Header';
import Card from './Components/TeamCards/Card';
import './App.scss';
import { Button, Col, Container, InputGroup, FormControl, Row } from 'react-bootstrap';

const App: React.FC = () => {
  const [members, setMembers] = useState<{id: string, troopTier: number, marchSize: number, rallySize: number, fighters: {attack: number, defense: number, health: number}, shooters: {attack: number, defense: number, health: number}, rider: {attack: number, defense: number, health: number}}[]>([]);

  const memberAddHandler = (member: {id: string, troopTier: number, marchSize: number, rallySize: number, fighters: {attack: number, defense: number, health: number}, shooters: {attack: number, defense: number, health: number}, rider: {attack: number, defense: number, health: number}}) => {
    setMembers([member])
  };

  return (
    <div className="App">
      <Header/>
      <div>
        <h2>Add Member</h2>
        <Container fluid="sm">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="Username">Username</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="In Game Name" aria-label="id" aria-describedby="Username"/>
          
            <InputGroup.Prepend>
              <InputGroup.Text id="tier">Troop Tier</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="5,6,7,8,9,10" aria-label="troopTier" aria-describedby="teir"/>
          
            <InputGroup.Prepend>
              <InputGroup.Text id="march">March Size</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="130000" aria-label="marchSize" aria-describedby="march"/>
          
            <InputGroup.Prepend>
              <InputGroup.Text id="rally">Rally Size</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="500000" aria-label="rallySize" aria-describedby="rally"/>
          </InputGroup>
          <InputGroup>Fighter Stats: Attack:   Defense:  Health:  </InputGroup>
          <InputGroup>Shooter Stats: Attack:   Defense:  Health:  </InputGroup>
          <InputGroup>Rider Stats: Attack:   Defense:  Health:  </InputGroup>
        </Container>
        <Button>Add Members</Button>
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
