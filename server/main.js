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

  class Employee extends Person{
    constructor(name,age,title){
      super(name,age);
      this.title = title;
    }
    getGreeting(){
      if (this.title) {
        return `Hi! I am ${this.name}, and I work as a ${this.title}`;
      }
      else{
        return super.getGreeting();
      }
    }
    hasJob(){
      return !!this.title;
    }
  }

  class Programmer extends Person{
    constructor(name,age,language='Assembly'){
      super(name,age);
      this.language = language;
    }
    getGreeting(){
      return `Hi! I am ${this.name}. I am a ${this.language} developer.`;
    }
  }

  let me = new Programmer('Mayur',24,'Java');

  console.log(me.getGreeting());

});
