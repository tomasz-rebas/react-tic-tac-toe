import React from 'react';

function Header(props) {
    
    let headerText;

    if (props.gameOver && props.winner) {
        headerText = props.winner + ' wins!';
    } else if (props.gameOver && props.winner === null) {
        headerText = 'Draw';
    } else {
        headerText = 'Current player: ' + props.currentPlayer;
    }

    return (
        <h2>{headerText}</h2>
    );
}

export default Header;