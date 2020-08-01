/* Working with Object Literals
Challenge 1/1
Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
create an empty object
add a name property to the newly created object with its value being the 'name' argument passed into the function
add an age property to the newly created object with its value being the 'age' argument passed into the function
return the object
 */
function makePerson(name, age){
    const person = {};
    person.name = name;
    person.age = age;

    return person;
}

const vicky = makePerson('Vicky', 24);
// /********* Uncomment these lines to test your work! *********/
//console.log(vicky.name); // -> Logs 'Vicky'
//console.log(vicky.age); // -> Logs 24

/* Using Object.create
Challenge 1/3
Inside personStore object, create a property greet where the value is a function that logs "hello".
 */
const personStore = {
    greet: function(){
        console.log("Hello");
    }
}

//personStore.greet(); // -> Logs 'hello'

/* Challenge 2/3
Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.
 */
function personFromPersonStore(name, age){
    const personObject = Object.create(personStore);
    personObject.name = name;
    personObject.age = age;
    return personObject;
}

const sandra = personFromPersonStore('Sandra', 26);
// /********* Uncomment these lines to test your work! *********/
//console.log(sandra.name);//->  Logs 'Sandra'
//console.log(sandra.age); //-> Logs 26
//sandra.greet(); //Logs 'hello'

/* Challenge 3/3
Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".
 */
personStore.introduce = function(){
    console.log(`Hi, my name is ${this.name}`);
}

//sandra.introduce();


/* Using the NEW keyword
Challenge 1/3
Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'. */
function PersonConstructor(){
    this.greet = function(){
        console.log('Hello');
    }
}

const simon = new PersonConstructor;
//simon.greet(); // -> Logs 'hello'

/* 
Challenge 2/3
Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.
 */
function personFromConstructor(name, age){
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
}

const mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
//console.log(mike.name); // -> Logs 'Mike'
//console.log(mike.age); //-> Logs 30
//mike.greet(); //-> Logs 'hello'

/* 
Challenge 3/3
Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".
 */
PersonConstructor.prototype.introduce = function(){
    console.log(`Hi, my name is ${this.name}`);
}
//mike.introduce();

/* 
Using ES6 Classes
Challenge 1/2
Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.
 */
class PersonClass{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log("Hello");
    }
}

const george = new PersonClass;
george.greet(); // -> Logs 'hello'

/* 
Challenge 2/2
Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.
 */
class DeveloperClass extends PersonClass {
    introduce(){
        console.log(`Hello World, my name is ${this.name}`);
    }
}

// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'