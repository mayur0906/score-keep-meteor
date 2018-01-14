import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'

import {Players} from './../imports/api/players.js';


const renderPlayers = function(playersList) {
  let numbers = [{val:9},{val:2},{val:3},{val:101}];

  return playersList.map(function(player){
    return <p key={player._id}>{player.name} has {player.score} points.</p>;
  });


}

const handleSubmit = function(e) {
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

Meteor.startup(function(playersList) {
  Tracker.autorun(function() {
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


  // console.log(Players.find().fetch());

});
