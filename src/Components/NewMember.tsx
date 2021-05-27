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
    riders: { attack: 0, defense: 0, health: 0 },
    troop: { attack: 0, defense: 0, health: 0 },
    troopDmg: { up: 0, down: 0 },
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onAddMember(this.state);
  };

  fighterState = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let num = parseInt(e.currentTarget.value);
    if(e.currentTarget.name === "Fattack") {
        this.setState(prevState => ({
            fighters: {
                ...prevState.fighters,
                attack: num
            }
        }));
    }
    if(e.currentTarget.name === "Fdefense") {
        this.setState(prevState => ({
            fighters: {
                ...prevState.fighters,
                defense: num
            }
        }));
    }
    if(e.currentTarget.name === "Fhealth") {
        this.setState(prevState => ({
            fighters: {
                ...prevState.fighters,
                health: num
            }
        }));
    }
  }

  shooterState = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let num = parseInt(e.currentTarget.value);
    if(e.currentTarget.name === "Sattack") {
        this.setState(prevState => ({
            shooters: {
                ...prevState.shooters,
                attack: num
            }
        }));
    }
    if(e.currentTarget.name === "Sdefense") {
        this.setState(prevState => ({
            shooters: {
                ...prevState.shooters,
                defense: num
            }
        }));
    }
    if(e.currentTarget.name === "Shealth") {
        this.setState(prevState => ({
            shooters: {
                ...prevState.shooters,
                health: num
            }
        }));
    }
  }

  riderState = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let num = parseInt(e.currentTarget.value);
    if(e.currentTarget.name === "Rattack") {
        this.setState(prevState => ({
            riders: {
                ...prevState.riders,
                attack: num
            }
        }));
    }
    if(e.currentTarget.name === "Rdefense") {
        this.setState(prevState => ({
            riders: {
                ...prevState.riders,
                defense: num
            }
        }));
    }
    if(e.currentTarget.name === "Rhealth") {
        this.setState(prevState => ({
            riders: {
                ...prevState.riders,
                health: num
            }
        }));
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let num = parseInt(e.currentTarget.value);
    if(e.currentTarget.name === "username") {
        this.setState({ username: e.currentTarget.value });
    }
    if(e.currentTarget.name === "troopTier") {
        this.setState({ troopTier: num });
    }
    if(e.currentTarget.name === "marchSize") {
        this.setState({ marchSize: num });
    }
    if(e.currentTarget.name === "rallySize") {
        this.setState({ rallySize: num });
    }
    this.fighterState(e);
    this.shooterState(e);
    this.riderState(e);
    if(e.currentTarget.name === "Tattack") {
        this.setState(prevState => ({
            troop: {
                ...prevState.troop,
                attack: num
            }
        }));
    }
    if(e.currentTarget.name === "Tdefense") {
        this.setState(prevState => ({
            troop: {
                ...prevState.troop,
                defense: num
            }
        }));
    }
    if(e.currentTarget.name === "Thealth") {
        this.setState(prevState => ({
            troop: {
                ...prevState.troop,
                health: num
            }
        }));
    }
    if(e.currentTarget.name === "TDup") {
        this.setState(prevState => ({
            troopDmg: {
                ...prevState.troopDmg,
                up: num
            }
        }));
    }
    if(e.currentTarget.name === "TDdown") {
        this.setState(prevState => ({
            troopDmg: {
                ...prevState.troopDmg,
                down: num
            }
        }));
    }
  };


  render() {
    return (
      <div>
        <Container fluid="sm">
          <Form onSubmit={this.handleSubmit}>
            <Form.Row className="align-items-center">
              <Col>
                <Form.Label htmlFor="username" >
                  Username
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="username"
                  name="username"
                  placeholder="In-Game Name"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </Col>
              <Col xs="auto">
                <Form.Label htmlFor="TroopTierInput" >
                  TroopTier
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>T</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control as="select" defaultValue={1} name="troopTier">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                  </Form.Control>
                </InputGroup>
              </Col>
              <Col>
                <Form.Label htmlFor="MarchInput" >
                  MarchSize
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="Marchinput"
                  name="marchSize"
                  placeholder="March Size"
                  onChange={this.handleChange}
                  value={this.state.marchSize}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="RallyInput" >
                  RallySize
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="Rallyinput"
                  name="rallySize"
                  placeholder="Rally Size"
                  onChange={this.handleChange}
                  value={this.state.rallySize}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label htmlFor="FighterAttackInput" >
                  FighterAttack
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="FighterAttackInput"
                  name="Fattack"
                  placeholder="Fighter Attack Buff"
                  onChange={this.handleChange}
                  value={this.state.fighters.attack}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="FighterDefenseInput" >
                  FighterDefense
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="FighterDefenseInput"
                  name="Fdefense"
                  placeholder="Fighter Defense Buff"
                  onChange={this.handleChange}
                  value={this.state.fighters.defense}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="FighterHealthInput" >
                  FighterHealth
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="FighterHealthInput"
                  name="Fhealth"
                  placeholder="Fighter Health Buff"
                  onChange={this.handleChange}
                  value={this.state.fighters.health}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label htmlFor="ShooterAttackInput" >
                  ShooterAttack
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="ShooterAttackInput"
                  name="Sattack"
                  placeholder="Shooter Attack Buff"
                  onChange={this.handleChange}
                  value={this.state.shooters.attack}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="ShooterDefenseInput" >
                  ShooterDefense
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="ShooterDefenseInput"
                  name="Sdefense"
                  placeholder="Shooter Defense Buff"
                  onChange={this.handleChange}
                  value={this.state.shooters.defense}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="ShooterHealthInput" >
                  ShooterHealth
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="ShooterHealthInput"
                  name="Shealth"
                  placeholder="Shooter Health Buff"
                  onChange={this.handleChange}
                  value={this.state.shooters.health}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label htmlFor="RiderAttackInput" >
                  RiderAttack
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="RiderAttackInput"
                  name="Rattack"
                  placeholder="Rider Attack Buff"
                  onChange={this.handleChange}
                  value={this.state.riders.attack}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="RiderDefenseInput" >
                  RiderDefense
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="RiderDefenseInput"
                  name="Rdefense"
                  placeholder="Rider Defense Buff"
                  onChange={this.handleChange}
                  value={this.state.riders.defense}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="RiderHealthInput" >
                  RiderHealth
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="RiderHealthInput"
                  name="Rhealth"
                  placeholder="Rider Health Buff"
                  onChange={this.handleChange}
                  value={this.state.riders.health}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label htmlFor="TroopAttackInput" >
                  TroopAttack
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="TroopAttackInput"
                  name="Tattack"
                  placeholder="Troop Attack Buff"
                  onChange={this.handleChange}
                  value={this.state.troop.attack}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="TroopDefenseInput" >
                  TroopDefense
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="TroopDefenseInput"
                  name="Tdefense"
                  placeholder="Troop Defense Buff"
                  onChange={this.handleChange}
                  value={this.state.troop.defense}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="TroopHealthInput" >
                  TroopHealth
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="TroopHealthInput"
                  name="Thealth"
                  placeholder="Troop Health Buff"
                  onChange={this.handleChange}
                  value={this.state.troop.health}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label htmlFor="TroopDMGUpInput" >
                  TroopDMGUp
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="TroopDMGUpInput"
                  name="TDup"
                  placeholder="Troop DMG Up"
                  onChange={this.handleChange}
                  value={this.state.troopDmg.up}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="TroopDMGDownInput" >
                  TroopDMGDown
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="TroopDMGInput"
                  name="TDdown"
                  placeholder="Troop DMG Down"
                  onChange={this.handleChange}
                  value={this.state.troopDmg.down}
                />
              </Col>
            </Form.Row>
            <Button variant="outline-dark" type="sumbit">
              Submit Member
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NewMember;
