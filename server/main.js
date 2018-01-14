import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players.js'
import {Tracker} from 'meteor/tracker'


Meteor.startup(function(){
  console.log(Players.find().fetch());
  

});
