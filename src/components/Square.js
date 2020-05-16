import React from 'react';

function Square(props) {
    return (
        <button 
            className={props.winningSquares.includes(props.index) ? 'square square-winning' : 'square'} 
            onClick={() => props.handleClick(props.index)}
        >
            {props.value}
        </button>
    );
}

export default Square;