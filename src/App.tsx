import React, { useState } from "react";
import Header from "./Components/Header";
import { Player } from "./Model/player.model";
import NewMember from "./Components/NewMember";
import CardContainer from './Components/CardContainer';
import "./App.scss";

const App: React.FC = () => {
  const [members, setMembers] = useState<Player[]>([]);

  const memberAddHandler = (member: Player) => {
    setMembers([member]);
  };

  return (
    <div className="App">
      <Header />
      <NewMember onAddMember={memberAddHandler}/>
      <CardContainer Members={members}/>
    </div>
  );
};

export default App;
