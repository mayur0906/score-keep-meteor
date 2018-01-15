import React from 'react'
import PropTypes from 'prop-types'
import FlipMove from 'react-flip-move';
import Player from './Player.js'

export default class PlayerList extends React.Component{
  renderPlayers(){
    if (this.props.players.length === 0) {
      return(
        <div className='item'>
          <p>Add your first player to get started!</p>
        </div>
      );
    }
    else {
      return this.props.players.map((player) =>{
        return <Player key={player._id} player={player}/>;
      });
    }

  }
  render(){
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes = {
  player: PropTypes.array.isRequired
}
