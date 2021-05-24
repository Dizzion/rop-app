import React, { useState } from "react";
import Header from "./Components/Header";
import Card from "./Components/TeamCards/Card";
import "./App.scss";
import {
  Button,
  Col,
  Container,
  InputGroup,
  FormControl,
  Row,
} from "react-bootstrap";

const App: React.FC = () => {
  const [members, setMembers] = useState<
    {
      id: string;
      troopTier: number;
      marchSize: number;
      rallySize: number;
      fighters: { attack: number; defense: number; health: number };
      shooters: { attack: number; defense: number; health: number };
      rider: { attack: number; defense: number; health: number };
    }[]
  >([]);

  const memberAddHandler = (member: {
    id: string;
    troopTier: number;
    marchSize: number;
    rallySize: number;
    fighters: { attack: number; defense: number; health: number };
    shooters: { attack: number; defense: number; health: number };
    rider: { attack: number; defense: number; health: number };
  }) => {
    setMembers([member]);
  };

  return (
    <div className="App">
      <Header />
      <Container fluid="sm">
        <h2>Add Member</h2>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="Username">Username</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="In Game Name"
            aria-label="id"
            aria-describedby="Username"
          />

          <InputGroup.Prepend>
            <InputGroup.Text id="tier">Troop Tier</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="5,6,7,8,9,10"
            aria-label="troopTier"
            aria-describedby="teir"
          />

          <InputGroup.Prepend>
            <InputGroup.Text id="march">March Size</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="130000"
            aria-label="marchSize"
            aria-describedby="march"
          />

          <InputGroup.Prepend>
            <InputGroup.Text id="rally">Rally Size</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="500000"
            aria-label="rallySize"
            aria-describedby="rally"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="fighterAttack">Fighter Attack</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="330"
            aria-label="fighterAttack"
            aria-describedby="fighterAttack"
          />

          <InputGroup.Prepend>
            <InputGroup.Text id="fighterDefense">Fighter Defense</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="330"
            aria-label="fighterDefense"
            aria-describedby="fighterDefense"
          />

          <InputGroup.Prepend>
            <InputGroup.Text id="fighterHealth">Fighter Health</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="330"
            aria-label="fighterHealth"
            aria-describedby="fighterHealth"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="shooterAttack">Shooter Attack</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="330"
            aria-label="ShooterAttack"
            aria-describedby="shooterAttack"
          />

          <InputGroup.Prepend>
            <InputGroup.Text id="shooterDefense">Shooter Defense</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="330"
            aria-label="ShooterDefense"
            aria-describedby="shooterDefense"
          />

          <InputGroup.Prepend>
            <InputGroup.Text id="shooterHealth">Shooter Health</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="330"
            aria-label="ShooterHealth"
            aria-describedby="shooterHealth"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="riderAttack">Rider Attack</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="330"
            aria-label="RiderAttack"
            aria-describedby="riderAttack"
          />

          <InputGroup.Prepend>
            <InputGroup.Text id="riderDefense">Rider Defense</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="330"
            aria-label="RiderDefense"
            aria-describedby="riderDefense"
          />

          <InputGroup.Prepend>
            <InputGroup.Text id="riderHealth">Rider Health</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="330"
            aria-label="RiderHealth"
            aria-describedby="riderHealth"
          />
        </InputGroup>
        <Button>Add Members</Button>
      </Container>
      <Container fluid>
        <Row>
          <Col sm>
            <Card />
          </Col>
          <Col sm>
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
