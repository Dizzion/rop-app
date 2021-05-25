import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./TeamCards/Card";
import { Player } from "../Model/player.model";



const CardContainer: React.FC<any> = props => {
  return (
    <div>
      {/*add sorting and use algorythm to sort all the members when added to site
                and when pulled from DB*/}
      <Container fluid>
        <Row>
          <Col sm>
            {/*<Card />*/}
          </Col>
          <Col sm>
            {/*<Card />*/}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
