import React from "react";
import { Container, Row, Button } from "react-bootstrap";

const CardContainer: React.FC<any> = props => {

  return (
      <>
      <Button variant="outline-info" size="lg" onClick={props.createGroups} className="sortButton">
        Sort Into Groups
      </Button>
      <Container fluid>
        <Row>{props.cards ? props.cards : ''}</Row>
      </Container>
      </>
  );
};

export default CardContainer;
