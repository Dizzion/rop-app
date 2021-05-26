import React from "react";
import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { Player } from "../Model/player.model";

type NewMemberProps = {
  onAddMember: (member: Player) => void;
};

class NewMember extends React.Component<NewMemberProps, Player> {
  state: Player = {
    username: "",
    troopTier: 0,
    marchSize: 0,
    rallySize: 0,
    fighters: { attack: 0, defense: 0, health: 0 },
    shooters: { attack: 0, defense: 0, health: 0 },
    rider: { attack: 0, defense: 0, health: 0 },
    troop: { attack: 0, defense: 0, health: 0 },
    troopDmg: { up: 0, down: 0 },
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };


  render() {
    return (
      <div>
        <Container fluid="sm">
          <Form onSubmit={this.handleSubmit}>
            <Form.Row className="align-items-center">
              <Col>
                <Form.Label htmlFor="UsernameInput" srOnly>
                  Username
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="Usernameinput"
                  name="username"
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
                  <Form.Control as="select" defaultValue="1" name="troopTier">
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
                  name="marchSize"
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
                  name="rallySize"
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
                  name="attack"
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
                  name="defense"
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
                  name="health"
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
                  name="attack"
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
                  name="defense"
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
                  name="health"
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
                  name="attack"
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
                  name="defense"
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
                  name="health"
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
                  name="attack"
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
                  name="defense"
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
                  name="health"
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
                  name="up"
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
                  name="down"
                  placeholder="Troop DMG Down"
                />
              </Col>
            </Form.Row>
            <Button variant="outline-warning" type="sumbit">
              Submit Member
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NewMember;
