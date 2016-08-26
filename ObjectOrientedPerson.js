/* 

  Homework Assignment:

  1.  Instead of a weapon being a string, create a weapon class.
  2.  Same for a Classroom
  3.  Have the setValues function take in a 6th parameter (argument) that sets
  EITHER the Weapon (if the object is a weapon) or the classroom (if the object is a classroom)
  appropriately.

  //Hint - If statements are cool
  //Another hint - use properties
  //third hint - "this.name" is a property

to run this

1. Navigate to the folder where this is located
2. "node ObjectOrientedPerson.js"
//hint - make sure node is installed on your machine!

*/


console.log("Welcome to the object oriented warrior example");

function Person () { //class
  this.name = "default name";
  this.height = "default height";
  this.hairColor;
  this.sex;
  this.eyeColor;

  this.setValues = function (_name, _height, _hairColor, _sex, _eyeColor) {
    this.name = _name;
    this.height = _height;
    this.hairColor = _hairColor;
    this.sex = _sex;
    this.eyeColor = _eyeColor;
  }
}

function Warrior () { //class
  this.person = new Person();
  this.weapon = "default weapon";
}

function Teacher () { //class
  this.person = new Person();
  this.classroom = "default classroom";
}

function printWarriors(_passedInValue) {
  console.log("");
  console.log("Person name = " + _passedInValue.person.name);
  console.log("Person height = " + _passedInValue.person.height);
  console.log("Person hair color = " + _passedInValue.person.hairColor);
  console.log("Person sex = " + _passedInValue.person.sex);
  console.log("Person eye color = " + _passedInValue.person.eyeColor);

  if (_passedInValue.weapon) {
    console.log("Person is a warrior!");
    console.log("Warrior weapon = " + _passedInValue.weapon);
  } else if (_passedInValue.classroom) {
    console.log("Person is a Teacher!");
    console.log("Teacher classroom = " + _passedInValue.classroom);
  }
}

var myWarrior = new Warrior();
myWarrior.person.setValues("Zorro", 10, "Red", "Male", "Brown");
myWarrior.weapon = "Whip";
printWarriors(myWarrior);

var myTeacher = new Teacher();
myTeacher.person.setValues("Barbra", 10, "Red", "Female", "Green");
myTeacher.classroom = "ECON 101";
printWarriors(myTeacher);

