import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players.js'
import {Tracker} from 'meteor/tracker'


Meteor.startup(function(){

  let numbers = [9,99,4,56];
  let newNumbers = numbers.map((number) => number+1);

  console.log(newNumbers);

});
