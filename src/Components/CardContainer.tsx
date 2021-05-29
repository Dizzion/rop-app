import React from "react";
import { Container, Row, Button } from "react-bootstrap";

const CardContainer: React.FC<any> = props => {

  return (
    <div>
      <Button variant="outline-danger" size="lg" onClick={props.createGroups}>
        Sort Into Groups
      </Button>
      <Container fluid>
        <Row>{props.cards ? props.cards : ''}</Row>
      </Container>
    </div>
  );
};

export default CardContainer;
