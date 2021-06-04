import React from 'react';
import { Player } from '../Model/player.model';

type NewMemberProps = {
    onAddMember: (member: Player) => void;
};

class InputMembers extends React.Component<NewMemberProps, Player> {
    render() {
        return (
            <>
            </>
        )
    }
}

export default InputMembers;