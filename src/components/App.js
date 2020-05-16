import React from 'react';
import Header from './Header';
import Board from './Board';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            currentPlayer: "X",
            squares: [],
            gameOver: false,
            winner: null,
            moveCount: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        if (this.state.squares[i] == null && !this.state.gameOver) {
            this.setState(prevState => {
                prevState.squares[i] = this.state.currentPlayer;
                if (this.state.currentPlayer === 'X') {
                    prevState.currentPlayer = 'O';
                } else {
                    prevState.currentPlayer = 'X';
                }
                return {
                    squares: prevState.squares
                }
            }, () => {
                if (this.state.currentPlayer === 'X') {
                    this.calculateWinner('O');
                } else {
                    this.calculateWinner('X');
                }
            });
        }
        console.log(this.state);
    }

    calculateWinner(lastMove) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const a = this.state.squares[lines[i][0]];
            const b = this.state.squares[lines[i][1]];
            const c = this.state.squares[lines[i][2]];
            //console.log(`lines[i] = ${lines[i]}`);
            //console.log(`lines[i][0] = ${lines[i][0]}, item[1] = ${lines[i][1]}, item[2] = ${lines[i][2]}`);
            //console.log(`a = ${a}, b = ${b}, c = ${c}, lastMove = ${lastMove}`);
            if (a === b && a === c && b === c && a === lastMove) {
                this.setState({
                    gameOver: true,
                    winner: a
                });
            }
        }

        this.checkForDraw();
    }

    checkForDraw() {
        this.setState(prevState => {
            return {
                moveCount: prevState.moveCount + 1
            }
        }, () => {
            if (this.state.moveCount === 9) {
                this.setState({
                    gameOver: true
                });
            }
        });
    }

    render() {
        return (
            <div>
                <Header 
                    currentPlayer={this.state.currentPlayer}
                    gameOver={this.state.gameOver}
                    winner={this.state.winner}
                />
                <Board 
                    handleClick={this.handleClick} 
                    squares={this.state.squares}
                />
            </div>
        );
    }
}

export default App;