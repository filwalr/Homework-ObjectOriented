console.log("Welcome to the warrior example");

function Warrior () {
    this.name = "default";
    this.height;
    this.weapon = {
      type: "default",
      length: 5, //in feet
      weight: 10, //in pounds
      design: "pretty"
    };

    this.setValues = function (_name, _height, _weapon) {
      this.name = _name;
      this.height = _height;
      this.weapon = _weapon;
    }
}

function printWarriors(_passedInValue) {
  console.log("");
  console.log("Warrior name = " + _passedInValue.name);
  console.log("Warrior height = " + _passedInValue.height);
  console.log("Warrior weapon = " + _passedInValue.weapon);
}

var warrior1 = new Warrior();
warrior1.setValues("Zorro", 10, "Lightning Bolts");
printWarriors(warrior1);

var warrior2 = new Warrior();
warrior2.setValues("Wonder Woman", 10, "Shield and Sword");

printWarriors(warrior2);
