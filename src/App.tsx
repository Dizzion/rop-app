import React, { useState } from "react";
import Header from "./Components/Header";
import { Player } from "./Model/player.model";
import NewMember from "./Components/NewMember";
import CardContainer from "./Components/CardContainer";
import TCard from "./Components/TeamCards/TCard";
import "./App.scss";
import { Col } from "react-bootstrap";

const App: React.FC = () => {
  const [members, setMembers] = useState<Player[]>([]);

  const [groups, setGroups] = useState<Player[][]>([]);

  const memberAddHandler = (member: Player) => {
    setMembers((prevMembers) => [...prevMembers, member]);
  };

  const createGroups = () => {
    let sortedMembers: Player[] = members;
    sortedMembers.sort(
      (a: Player, b: Player) => b.fighters.attack - a.fighters.attack
    );
    let numGroups: number = Math.ceil(sortedMembers.length / 6);
    setGroups(new Array(numGroups)
      .fill("")
      .map((_, i) => sortedMembers.slice(i * 6, (i + 1) * 6)));
  };
  let cards = groups.map((n, i) => {
    return (
      <Col key={i} sm>
        <TCard num={i} teams={n} />
      </Col>
    );
  });

  return (
    <div className="App">
      <Header />
      <CardContainer createGroups={createGroups} cards={cards} />
      <NewMember onAddMember={memberAddHandler} />
      <h2>{members.length} Members</h2>
    </div>
  );
};

export default App;
