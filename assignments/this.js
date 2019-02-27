/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding. The most common case of function, that calls the standalone function.

* 2. Implicit Binding. The object that comes before the .notation is what is bound in this scenario, so our function calls that object implicitly. 

* 3. New Binding. The new operator uses ${this} to create and reference a new object which inherits the prototype of the function we are using.
    The properties and methods are added to that object by again using ${this). The new object referenced is then returned at the end implicitly.

* 4. Explicit Binding. Forcing a function to call a particular object by using ${this.object}, 
    which explicitly tells a function which object to use for the function we are performing 



* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function hello(param) {
    "use strict";
    console.log(this);
    return `I like to say: ${param}`;
}
  
console.log(hello("hello"));


// Principle 2
// code example for Implicit Binding

const hobbit = {
    name: "Samwise",
    age: 32,
    food: "taters",
    cook: function() {
      return `${this.name} loves to cook ${this.food}`;
    }
}

  console.log(hobbit.cook());


// Principle 3
// code example for New Binding

function Animal(food) {
    this.food = food;
    this.eat = function() {
      console.log(`This animal likes to eat ${this.food}`);
    }
}

const zebra = new Animal('grass');
const lion = new Animal('meat');

console.log(zebra);

zebra.eat();
lion.eat();


// Principle 4
// code example for Explicit Binding

const person = {
    name: "Jill"
}
  
const hobbit = {
    name: "Frodo"
}
  
const skills = ["HTML","CSS","JS"];
  
function introduce(skills1, skills2, skills3) {
    debugger;
    return `Hello! my name is: ${this.name} and these are my skills: ${skills1}, ${skills2}, ${skills3}`;
}
  
//   Passes arguments individually
console.log(introduce.call(person, skills));
  
//   Passes arguments as a single array of arguments
console.log(introduce.apply(person, skills));

