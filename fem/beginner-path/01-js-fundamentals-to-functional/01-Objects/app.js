var person = {};

//Assignnment with dots
person.name = "Mrs. White";

//Assignment when creating object
var person2 = {
    "name" : "Mrs. White"
};

//storing by value .. Primitive values (like strings, booleans, null, undefined, numbers are always passed by value)
var who = person.name;
//Non primitive values like arrays, functions, objects are always passed by reference
who; // "Mrs. white"
//Reference in object changed value
person.name = "Mr. White";
//but since who was stored by value, the same value would remain
who; // Mrs. White

//ARRAYS
//Arrays are objects!
var personArray = [];
personArray.name = "Mrs. White";
var who2 = personArray.name;
who2; // will evaluate to "Mrs. White"

var personBracket = [];
var plea = "wouldShe";
personBracket.name = "Mrs. White";
//bracket notation doesnt automatically coerces to string, so it must have a string value defined before or use i with quotes
personBracket[plea] = "I would never!";

personBracket; // it would evaluate to an object with properties name (value "Mrs White") and wouldShe (value "I would never!")