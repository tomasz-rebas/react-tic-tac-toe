import React from 'react';
import Square from './Square';

function Board(props) {
    
    let board = [];

    // create board
    for (let i = 0; i < 9; i ++) {
        board.push(
            <Square 
                handleClick={props.handleClick}
                key={i}
                index={i}
                value={props.squares[i]}
                winningSquares={props.winningSquares}
            />);
    }

    return (
        <div className="board">
            {board}
        </div>
    );
}

export default Board;