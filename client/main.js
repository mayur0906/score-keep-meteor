import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'

const players = [{
  _id:1,
  name:'Alice',
  score:99
},{
  _id:2,
  name:'Bob',
  score:-1
},{
  _id:3,
  name:'Catherine',
  score:-12
}];

const renderPlayers = function() {
  let numbers = [{val:9},{val:2},{val:3},{val:101}];

  return players.map(function(player){
    return <p key={player._id}>{player.name} has {player.score} points.</p>;
  });


}

Meteor.startup(function(playersList) {
  let title = 'Hello Internet!'
  let name = 'Mayur';
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is my second paragraph.</p>
      {renderPlayers()}
    </div>
  );
  ReactDOM.render(jsx,document.getElementById('app'));
});
