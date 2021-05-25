import React from "react";
import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { Player } from '../Model/player.model';

type NewMemberProps = {
    onAddMember: (member: Player) => void;
}

const NewMember: React.FC<NewMemberProps> = props => {
  return (
    <div>
      <Container fluid="sm" >
        <h2>Add Member</h2>
        <Form >
            <Form.Row className="align-items-center">
                <Col>
                    <Form.Label htmlFor="UsernameInput" srOnly>
                        Username
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="Usernameinput"
                        placeholder="In-Game Name"
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="TroopTierInput" srOnly>
                        TroopTier
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>T</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="select" defaultValue="1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </Form.Control>
                    </InputGroup>
                </Col>
                <Col>
                    <Form.Label htmlFor="MarchInput" srOnly>
                        MarchSize
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="Marchinput"
                        placeholder="MarchSize"
                    />
                </Col>
                <Col>
                    <Form.Label htmlFor="RallyInput" srOnly>
                        RallySize
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="Rallyinput"
                        placeholder="Rally Size"
                    />
                </Col>
            </Form.Row>
        </Form>
      </Container>
    </div>
  );
};

export default NewMember;