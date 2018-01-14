import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Players} from './../imports/api/players.js';


const renderPlayers = (playersList) => {
  return playersList.map((player) =>{
  return <p key={player._id}>{player.name} has {player.score} points.</p>
});
}

const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;
  if (playerName) {
    e.target.playerName.value = "";
    Players.insert({
      name: playerName,
      score: 0
    });
  }
  e.preventDefault();
};

Meteor.startup((playersList) => {
  Tracker.autorun(() => {
    let players=Players.find().fetch();
    let title = 'Hello Internet!'
    let name = 'Mayur';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second paragraph.</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx,document.getElementById('app'));
  });

});
