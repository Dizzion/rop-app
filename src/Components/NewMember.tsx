import React from "react";
import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { Player } from "../Model/player.model";

type NewMemberProps = {
  onAddMember: (member: Player) => void;
};

const NewMember: React.FC<NewMemberProps> = (props) => {
  return (
    <div>
      <Container fluid="sm">
        <Form>
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
                placeholder="March Size"
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
          <Form.Row>
            <Col>
              <Form.Label htmlFor="FighterAttackInput" srOnly>
                FighterAttack
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="FighterAttackInput"
                placeholder="Fighter Attack Buff"
              />
            </Col>
            <Col>
              <Form.Label htmlFor="FighterDefenseInput" srOnly>
                FighterDefense
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="FighterDefenseInput"
                placeholder="Fighter Defense Buff"
              />
            </Col>
            <Col>
              <Form.Label htmlFor="FighterHealthInput" srOnly>
                FighterHealth
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="FighterHealthInput"
                placeholder="Fighter Health Buff"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label htmlFor="ShooterAttackInput" srOnly>
                ShooterAttack
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="ShooterAttackInput"
                placeholder="Shooter Attack Buff"
              />
            </Col>
            <Col>
              <Form.Label htmlFor="ShooterDefenseInput" srOnly>
                ShooterDefense
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="ShooterDefenseInput"
                placeholder="Shooter Defense Buff"
              />
            </Col>
            <Col>
              <Form.Label htmlFor="ShooterHealthInput" srOnly>
                ShooterHealth
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="ShooterHealthInput"
                placeholder="Shooter Health Buff"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label htmlFor="RiderAttackInput" srOnly>
                RiderAttack
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="RiderAttackInput"
                placeholder="Rider Attack Buff"
              />
            </Col>
            <Col>
              <Form.Label htmlFor="RiderDefenseInput" srOnly>
                RiderDefense
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="RiderDefenseInput"
                placeholder="Rider Defense Buff"
              />
            </Col>
            <Col>
              <Form.Label htmlFor="RiderHealthInput" srOnly>
                RiderHealth
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="RiderHealthInput"
                placeholder="Rider Health Buff"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label htmlFor="TroopAttackInput" srOnly>
                TroopAttack
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="TroopAttackInput"
                placeholder="Troop Attack Buff"
              />
            </Col>
            <Col>
              <Form.Label htmlFor="TroopDefenseInput" srOnly>
                TroopDefense
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="TroopDefenseInput"
                placeholder="Troop Defense Buff"
              />
            </Col>
            <Col>
              <Form.Label htmlFor="TroopHealthInput" srOnly>
                TroopHealth
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="TroopHealthInput"
                placeholder="Troop Health Buff"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label htmlFor="TroopDMGUpInput" srOnly>
                TroopDMGUp
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="TroopDMGUpInput"
                placeholder="Troop DMG Up"
              />
            </Col>
            <Col>
              <Form.Label htmlFor="TroopDMGDownInput" srOnly>
                TroopDMGDown
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="TroopDMGInput"
                placeholder="Troop DMG Down"
              />
            </Col>
          </Form.Row>
          <Button variant="outline-warning">Submit Member</Button>
        </Form>
      </Container>
    </div>
  );
};

export default NewMember;
