import React, { useState } from "react";
import Header from "./Components/Header";
import { Player } from "./Model/player.model";
import NewMember from "./Components/NewMember";
import CardContainer from './Components/CardContainer';
import "./App.scss";
import { Card, CardGroup } from "react-bootstrap";

const App: React.FC = () => {
  const [members, setMembers] = useState<Player[]>([]);

  const memberAddHandler = (member: Player) => {
    setMembers(prevMembers => [...prevMembers, member]);
  };

  let sorted: boolean = false;

  let memberList = members.map((per, i) => {
    return <Card key={i}>{per.username}</Card>
  });

  return (
    <div className="App">
      <Header />
      <NewMember onAddMember={memberAddHandler}/>
      <CardGroup className="row row-cols-1 row-cols-md-4 container-fluid">{members ? memberList: ''}</CardGroup>
      <CardContainer Members={members}/>
    </div>
  );
};

export default App;
