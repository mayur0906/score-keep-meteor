import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'

import {Players} from './../imports/api/players.js';
import App from './../imports/ui/App.js';


Meteor.startup((playersList) => {
  Tracker.autorun(() => {
    let players=Players.find().fetch();
    let title = 'Score Keep App'
    let name = 'Mayur';
    ReactDOM.render(<App title={title} players={players}/>,document.getElementById('app'));
  });

});
