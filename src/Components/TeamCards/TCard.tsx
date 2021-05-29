import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const TCard: React.FC<any> = props => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item active>Group {props.num + 1}</ListGroup.Item>
                <ListGroup.Item>{props.teams[0].username}</ListGroup.Item>
                <ListGroup.Item>{props.teams[1] ? props.teams[1].username : ''}</ListGroup.Item>
                <ListGroup.Item>{props.teams[2] ? props.teams[2].username : ''}</ListGroup.Item>
                <ListGroup.Item>{props.teams[3] ? props.teams[3].username : ''}</ListGroup.Item>
                <ListGroup.Item>{props.teams[4] ? props.teams[4].username : ''}</ListGroup.Item>
                <ListGroup.Item>{props.teams[5] ? props.teams[5].username : ''}</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default TCard;
