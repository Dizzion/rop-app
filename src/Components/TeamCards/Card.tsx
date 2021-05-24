import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Card() {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item active>Group #</ListGroup.Item>
                <ListGroup.Item>Person 1</ListGroup.Item>
                <ListGroup.Item>Person 2</ListGroup.Item>
                <ListGroup.Item>Person 3</ListGroup.Item>
                <ListGroup.Item>Person 4</ListGroup.Item>
                <ListGroup.Item>Person 5</ListGroup.Item>
                <ListGroup.Item>Person 6</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Card;
