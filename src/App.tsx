import React, { useState } from "react";
import Header from "./Components/Header";
import { Player } from "./Model/player.model";
import NewMember from "./Components/NewMember";
import CardContainer from "./Components/CardContainer";
import "./App.scss";
import { Card, CardGroup } from "react-bootstrap";

const App: React.FC = () => {
  const [members, setMembers] = useState<Player[]>([]);

  const memberAddHandler = (member: Player) => {
    setMembers((prevMembers) => [...prevMembers, member]);
  };

  let memberList = members.map((per, i) => {
    return <Card key={i}>{per.username}</Card>;
  });

  return (
    <div className="App">
      <Header />
      <NewMember onAddMember={memberAddHandler} />
      <CardGroup>{members ? memberList : ""}</CardGroup>
      <CardContainer Members={members} />
    </div>
  );
};

export default App;
