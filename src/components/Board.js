import React from 'react';
import Square from './Square';

function Board(props) {
    
    let board = [];
    let squareIndex = 0;

    // create board
    for (let i = 0; i < 3; i ++) {
        let row = [];
        for (let j = 0; j < 3; j ++) {
            row.push(<Square 
                        handleClick={props.handleClick}
                        key={squareIndex}
                        index={squareIndex}
                        value={props.squares[squareIndex]}
                    />);
            squareIndex ++;
        }
        board.push(<div className="row" key={i}>{row}</div>);
    }

    return (
        <div className="board">
            {board}
        </div>
    );
}

export default Board;