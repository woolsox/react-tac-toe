import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (<button className="square">
      {/* TODO */}
    </button>);
  }
}

class Board extends React.Component {
  renderSqaure(i) {
    return <Square/>;
  }

  render() {
    const status = 'Next Player: X';

    return (
      <div>
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
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* TODO */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ====================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
