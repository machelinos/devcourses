// Normal function to check if a number si divisible by other number
const divisible = (num, mod) => num % mod;

//Currying lets us call a function with one parameter or less than expected, this returns a function that waits for the remaining parameters
const divisibleCurried = mod => num => num % mod;

console.log(divisible(10, 2));

//we can use curried function passing paramters
console.log(divisibleCurried(2)(10));

//or saving to a function and then executing that function
const divisibleBy3 = divisibleCurried(3);
console.log(divisibleBy3(9));


//want to get a function that returns odd elements in an array
//define a curriy function with 2 argumnents
const curry = f => x => y => f(x,y);

const isOdd = divisibleCurried(2);

const filter = curry((f, xs) => xs.filter(f));

const getOdds = filter(isOdd);

console.log(getOdds([1,2,3,4,5]));