import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'

import {Players} from './../imports/api/players.js';
import TitleBar from './../imports/ui/TitleBar.js';
import AddPlayer from './../imports/ui/AddPlayer.js'
import PlayerList from './../imports/ui/PlayerList.js'

Meteor.startup((playersList) => {
  Tracker.autorun(() => {
    let players=Players.find().fetch();
    let title = 'Score Keep App'
    let name = 'Mayur';
    let jsx = (
      <div>
        <TitleBar title={title} subtitle="Created by Mayur Muralidhar."/>
        <PlayerList players = {players}/>
        <AddPlayer/>
      </div>
    );

    ReactDOM.render(jsx,document.getElementById('app'));
  });

});
