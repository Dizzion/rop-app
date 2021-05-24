import React, { useState } from "react";
import Header from "./Components/Header";
import Card from "./Components/TeamCards/Card";
import { Player } from "./Model/player.model";
import NewMember from "./Components/NewMember";
import "./App.scss";
import { Col, Container, Row } from "react-bootstrap";

const App: React.FC = () => {
  const [members, setMembers] = useState<Player[]>([]);

  const memberAddHandler = (member: Player) => {
    setMembers([member]);
  };

  return (
    <div className="App">
      <Header />
      <NewMember />
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
