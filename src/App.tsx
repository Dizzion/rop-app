import React, { useState } from "react";
import Header from "./Components/Header";
import { Player } from "./Model/player.model";
import NewMember from "./Components/NewMember";
import CardContainer from './Components/CardContainer';
import "./App.scss";
import { ListGroup } from "react-bootstrap";

const App: React.FC = () => {
  const [members, setMembers] = useState<Player[]>([]);

  const memberAddHandler = (member: Player) => {
    setMembers(prevMembers => [...prevMembers, member]);
  };

  let sorted: boolean = false;

  let memberList = members.map((per, i) => {
    return <ListGroup.Item>{per.username}</ListGroup.Item>
  });

  return (
    <div className="App">
      <Header />
      <ListGroup>{members ? memberList: ''}</ListGroup>
      <NewMember onAddMember={memberAddHandler}/>
      <CardContainer Members={members}/>
    </div>
  );
};

export default App;
