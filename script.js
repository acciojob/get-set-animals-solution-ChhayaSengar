class Animal {
  constructor(species) {
    this._species = species;
  }
// this is getter for species
  get species() {
    return this._species;
  }
// this is method
  makeSound() {
    console.log("The " + this.species + " makes a sound");
  }
}
// it is subclass
class Cat extends Animal {
	// here i have add the method acc to question
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
	// here i have add the method  inside the subclass acc to question
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
