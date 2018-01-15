import React from 'react'
import PropTypes from 'prop-types'
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
        {this.renderPlayers()}
      </div>
    );
  }
};

PlayerList.propTypes = {
  player: PropTypes.array.isRequired
}
