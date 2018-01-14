import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players.js'
import {Tracker} from 'meteor/tracker'


Meteor.startup(() => {
  class Person{
    constructor(name='Anonymous',age=0){
      this.name = name;
      this.age = age;
    }
    getGreeting(){
      return `Hi! I am ${this.anme}`;
    }
    getDescription(){
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }

  let me = new Person('Mayur',24);
  console.log(me.getDescription());
});
