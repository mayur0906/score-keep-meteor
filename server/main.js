import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players.js'

Meteor.startup(function(){
  Players.insert({
    name: 'Bob',
    score: 6
  });
  console.log(Players.find().fetch());
});
