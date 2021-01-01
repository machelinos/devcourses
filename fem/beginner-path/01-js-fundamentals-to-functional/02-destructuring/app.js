//ES6 Destructuring
//Variable declrations:
let [first, second] = [true, false];
let {firstObj, secondObj} = {firstObj: 0, secondObj: 1};

//Assignment
[first, second] = [false, true];
//for object assignment the parenthesis are necessary, cause if not the left part is taken as a block and not an object literal and that{s a sintax error
({firstObj, secondObj} = { firstObj:1, secondObj:2 });

//Exercise
//Create an object that looks like this
let clueCard = { "name":"Rusty", "room":"kitchen", "weapon":"candlestick"};

let {weapon, room} = clueCard;

//Destructuring examples

//Omit certain values
var [a, , b] = [1,2,3];
console.log(a, b); // => 1 3

//Combine with spread/resy operator (accumulates the rest of the values)
var [one, ...two] = [1, 2, 3];
console.log(one, two); // => 1 [2, 3];

//swap variables easily wothout temp
let firstValue = 1, secondValue =3;
[firstValue, secondValue] = [secondValue, firstValue];
console.log(firstValue, secondValue); // => 3 1

//Advance deep arrays
var [c, [d, [e, f] ] ] = [1, [2, [[[3,4], 5], 6 ] ] ];
console.log(c, d, e, f); // => 1 2 [[3,4], 5] 6