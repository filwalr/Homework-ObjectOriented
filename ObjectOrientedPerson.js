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
  this.occupation = "default occupation";
  this.height = "default height";
  this.hairColor; 
  this.sex;
  this.eyeColor;
  this.accessory;

  this.setValues = function (_name, _occupation, _height, _hairColor, _sex, _eyeColor, _accessory) {
    this.name = _name;
    this.occupation = _occupation;
    this.height = _height;
    this.hairColor = _hairColor;
    this.sex = _sex;
    this.eyeColor = _eyeColor;
    this.accessory = _accessory;
  }
}

function Warrior () { //class
  this.person = new Person();
}

function Teacher () { //class
  this.person = new Person();
}

function printWarriors(_passedInValue) {
  console.log("");
  console.log("Person Name = " + _passedInValue.person.name);
  console.log("Person Occupation = " + _passedInValue.person.occupation);
  console.log("Person Height = " + _passedInValue.person.height);
  console.log("Person Hair Color = " + _passedInValue.person.hairColor);
  console.log("Person Sex = " + _passedInValue.person.sex);
  console.log("Person Eye Color = " + _passedInValue.person.eyeColor);

  if (_passedInValue.person.occupation = "Teacher") {
    console.log("This person teaches = " + _passedInValue.person.accessory);
  } else if (_passedInValue.person.occupation = "Warrior") {
    console.log("This fights with a = " + _passedInValue.person.accessory);
  }
}

var myWarrior = new Warrior();
myWarrior.person.setValues("Zorro", "Warrior", 10, "Red", "Male", "Brown", "ECON 101");
printWarriors(myWarrior);

var myTeacher = new Teacher();
myTeacher.person.setValues("Barbra", 10, "Red", "Female", "Green");
myTeacher.classroom = "ECON 101";
printWarriors(myTeacher);

