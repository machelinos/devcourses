const guilty = {
    name: 'Rusty',
    room: 'kitchen',
    weapon: 'candlestick'
};

let {room, weapon} = guilty;

//Destructuring examples
var [a, b] = [1,2];
console.log(a,b);
//=> 1 2

//Omit certain values
var [a, , b] = [1, 2 ,3];
console.log(a,b);
//=> 1 3

//Combine with spread rest operator
var [a, ...b] = [1,2,3];
console.log(a, b);
//=> 1 [2,3]

//Swap variables easily without temp
var a=1, b=2;
[b, a] = [a, b];
console.log(a,b);
//=> 2 1

//Advance deep arrays
var [a, [b, [c,d] ] ] = [1, [2, [ [ [3,4], 5], 6] ] ];
console.log('a:',a, "b:",b, "c:",c,"d:",d);
//=> a:1 b:2 c: [[3,4],5] d: 6

// === Objects
var {user: x} = {user: 5};
console.log(x);
//=> 5

//Fail safe
var {user: x} = { user2: 5}
console.log(x);
//undefined

//more values
var { prop: x, prop2: y} = {prop: 5, prop2: 10};
console.log(x, y);
//=>5 10