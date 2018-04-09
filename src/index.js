import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  };

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSqaure(i) {
    return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>);
  }

  render() {
    const status = 'Next Player: X';

    return (<div>
      <div className="status">{status}</div>
      <div className="board-row">
        {this.renderSqaure(0)}
        {this.renderSqaure(1)}
        {this.renderSqaure(2)}
      </div>
      <div className="board-row">
        {this.renderSqaure(3)}
        {this.renderSqaure(4)}
        {this.renderSqaure(5)}
      </div>
      <div className="board-row">
        {this.renderSqaure(6)}
        {this.renderSqaure(7)}
        {this.renderSqaure(8)}
      </div>
    </div>);
  }
}

class Game extends Component {
  render() {
    return (<div className="game">
      <div className="game-board">
        <Board/>
      </div>
      <div className="game-info">
        <div>{/* TODO */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>);
  }
}

// ====================================

ReactDOM.render(<Game/>, document.getElementById('root'));
