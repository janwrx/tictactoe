import React, { Component } from 'react';

import './game.css'
// function Square(props) {
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }


class Grid extends React.Component {
    constructor(props){
        super(props)
        this.state={
            // message: 'x',
            squares: Array(9).fill(null),
            player: ["@" , "$"],
            counter: 0,
        }

    }

    clickHandle = (num, message) => {
        var arr = this.state.squares
        let currentPlayer = this.whosTurn(this.state.counter)
        arr[num]= currentPlayer
        console.log(this.state.counter);
        console.log(this.state.squares);
        console.log(num, this.state.playerX)
        this.calculateWinner(this.state.squares)
        this.setState({squares: arr, counter: this.state.counter+1});

    }


    renderSquare(num) {
        return (
            <div className='gridContainer' id={num} onClick ={() => this.clickHandle(num)}>
            <p>{this.state.squares[num]}</p>

            </div>
        );

    }

    whosTurn = () => {
        if (this.state.counter % 2 === 0)
            return (this.state.player[0])
        else {
            return (this.state.player[1])
        }
    }



  render(){
      return (
        <div className='gridContainer'>
            <div>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
    );

  }
  calculateWinner = (squares) => {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i=0 ; i < lines.length; i++) {
  const [a, b, c]= lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return alert("You Won!! Refresh page to play again");
    } else if (this.state.counter >= 8){
        return alert("Cats Game")
    }

  }
 }
}

export default Grid;
// export default Button;












//     let layout = [];
//     let total_articles = props.articles.length;
//     let nRows = total_articles / 3;
//     let nCols = 3;
// };
