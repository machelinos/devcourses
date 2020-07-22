/* Working with Object Literals
Challenge 1/1
Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
create an empty object
add a name property to the newly created object with its value being the 'name' argument passed into the function
add an age property to the newly created object with its value being the 'age' argument passed into the function
return the object
 */
function PersonConstructor(name, age){
    this.name = name;
    this.age = age;

    return this;
}
/* 
Challenge 1/3
Inside personStore object, create a property greet where the value is a function that logs "hello".
 */
PersonConstructor.prototype.greet = function(){
    console.log('hello');
}

const simon = new PersonConstructor;
simon.greet(); //=> hello

/* Challenge 2/3
Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.
 */
function personFromPersonStore(name, age){
    const person = new PersonConstructor(name, age);
    return person;
}

const mike = personFromPersonStore('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/* 
Challenge 3/3
Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]". */
PersonConstructor.prototype.whoAmI = function(){
    console.log(`Hi, my name is ${this.name}`);
}

mike.whoAmI();


/* Using ES6 Classes
Challenge 1/2
Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.
 */
class PersonClass{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log('hello');
    }
}

const george = new PersonClass();
george.greet(); // -> Logs 'hello'

/* Challenge 2/2
Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'. */
class DeveloperClass extends PersonClass{
    introduce(){
        console.log(`hello world, my name is ${this.name}`);
    }
}

const thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'


/* EXTENSION: Subclassing
Challenge 1/5
Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.
 */
const userFunctionStore = {
    sayType: function() {
      console.log("I am a " + this.type);
    }
  }
  
  function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
  }

  const adminFunctionStore = Object.create(userFunctionStore);

/*   Challenge 2/5
Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.
 */
const adminFactoryStore = {
    sharePublicMessage: function(){
        console.log('Welcome Users');
    }
}

 function adminFactory(){
    userFactory.call(this);
 }

 adminFactory.prototype = Object.create(userFactory.prototype);
 adminFactory.prototype.sharePublicMessage = function(){
     console.log('Welcome Users!');
 } 
 adminFactory.prototype.constructor = adminFactory;


const adminFromFactory = adminFactory("Eva", 5);

adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"