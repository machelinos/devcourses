const outer1 = () => {
    let counter = 0;

    const incrementCounter = () => {
        counter++;
    }

    return incrementCounter;
}
const newFunction = outer1();
//newFunction();

/* 
Challenge 1
Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
 */
const createFunction = () => {
    const sayHi = () => {
        console.log("Hello")
    }
    return sayHi;
}
//const function1 = createFunction();
//function1();

/* 
Challenge 2
Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
 */
const createFunctionPrinter = input => {
    const print = () => {
        console.log(input);
    }
    return print;
}
const printSample = createFunctionPrinter('sample');
//printSample();
const printHello = createFunctionPrinter('hello');
//printHello();

/* 
Challenge 3
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing.
 */
const outer = () => {
    let counter = 0; 
    const incrementCounter = () => {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();
//willCounter(); //=> counter 1
//willCounter(); //=> counter 2
//willCounter(); //=> counter 3
//jasCounter(); //=> counter 1  
//willCounter(); //=> counter 4

/* 
Challenge 4
Now we are going to create a function addByX that returns a function that will add an input by x.
 */
const addByX = (x) => {
    const add = (input) => {
        return input + x;
    }
    return add;
}
const addByTwo = addByX(2);
//addByTwo(1); //should return 3
//addByTwo(2); //should return 4
//addByTwo(3); //should return 5
const addByThree = addByX(3);
//addByThree(1); //should return 4
//addByThree(2); //should return 5
const addByFour = addByX(4);
//addByFour(4); //should return 8
//addByFour(10); //should return 14

/* 
Challenge 5
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
 */
const once = (fn) => {
    let counter=0;
    let output;
    const runFn = (input) => {
        if(counter===0){
            output = fn(input);
            counter++;
        }
        return output;
    }
    return runFn;
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
//console.log(onceFunc(4));  //should log 6
//console.log(onceFunc(10));  //should log 6
//console.log(onceFunc(9001));  //should log 6

/* 
Challenge 6
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/
const after = (times, fn) => {
    const runFn = () => {
        if(times<=1){
            fn();
        }
        times--;
    }
    return runFn;
}

const called = () => console.log('hello');
const afterCalled = after(3, called);
//afterCalled(); // -> nothing is printed
//afterCalled(); // -> nothing is printed
//afterCalled(); // -> 'hello' is printed

/* 
Challenge 7
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
 */
const delay = (fn, wait) => {
    const runFn = (input) => {
        setTimeout(function(){
            fn(input);
        }, wait);
    }
    return runFn;
}

const calledAfterDelay = delay(called, 1000);
calledAfterDelay(2);

/* 
Challenge 8
Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.
 */
const russianRoulette = (n) => {
    let counter = 0;

    const trigger = () => {
        counter++;
        if(counter<n){
            return 'click';
        }else if(counter === n) {
            return 'bang';
        }else {
            return 'reload to play again';
        }
    }

    return trigger;
}
/*  const play = russianRoulette(3);
 console.log(play()); // should log: 'click'
 console.log(play()); // should log: 'click'
 console.log(play()); // should log: 'bang'
 console.log(play()); // should log: 'reload to play again'
 console.log(play()); // should log: 'reload to play again' */

/* 
 Challenge 9
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.
 */
const average = () => {
    let sum =0;
    let average = 0;
    let counter = 0;

    const calculateAverage = (n) => {
        if(n) {
            counter++;
            sum = sum + n;
            average = sum/counter;
        }

        return average;
    }

    return calculateAverage;
}

const avgSoFar = average();
//console.log(avgSoFar()); // should log: 0
//console.log(avgSoFar(4)); // should log: 4
//console.log(avgSoFar(8)); // should log: 6
//console.log(avgSoFar()); // should log: 6
//console.log(avgSoFar(12)); // should log: 8
//console.log(avgSoFar()); // should log: 8

/* 
Challenge 10
Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.
 */
const makeFuncTester = (arr) => {
    const checkFirst = (fn) => {
        for(let i=0; i < arr.length; i++ ) {
            if(fn(arr[i][0])!==arr[i][1]){
                return false;
            }
        }
        return true;
    }

    return checkFirst;
}

/* const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true */

/* 
Challenge 11
Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that delted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.
 */
const makeHistory = (limit) => {
    let history = [];

    const saveHistory = (word) => {
        if(word==='undo') {
            if(history.length === 0) return 'nothing to undo';
            let output = history.pop();
            return `${output} undone`;
        }

        if(history.length===limit){
            history.splice(0,1);
        }

        history.push(word);
        return `${word} done`;
    }

    return saveHistory;
}

/* const myActions = makeHistory(2);
console.log(myActions('jump')); // should log: 'jump done'
console.log(myActions('undo')); // should log: 'jump undone'
console.log(myActions('walk')); // should log: 'walk done'
console.log(myActions('code')); // should log: 'code done'
console.log(myActions('pose')); // should log: 'pose done'
console.log(myActions('undo')); // should log: 'pose undone'
console.log(myActions('undo')); // should log: 'code undone'
console.log(myActions('undo')); // should log: 'nothing to undo' */

/* 
Challenge 12
Inspect the commented out test cases carefully if you need help to understand these instructions.

Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

On the SECOND invocation of the PLAYER function, it will return either:

the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
the string 'bust' if that sum is over 21.

If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
the string 'bust' if the new sum is over 21.

And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
You may assume that the given array is long enough to give a 'bust' before running out of numbers.

BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.
 */
const blackjack = (arr) => {
    let playerCounter = 0;
    let sum = 0;
    let busted = false;

    const dealer = (num1, num2) => {

        const player = () => {

            if(playerCounter==0){
                sum = sum + num1 + num2;
                playerCounter++;
                return sum;
            }else if(playerCounter===1){
                sum = arr[playerCounter-1] + sum;
                playerCounter++;
                if(sum<=21){
                    return sum;
                } else {
                    busted = true;
                    sum = 0;
                    return 'bust';
                }
            } else {
                if(busted) {
                    return 'you are done!';
                } else {
                    sum = arr[playerCounter-1] + sum;
                    playerCounter++;

                    if(sum<=21){
                        return sum
                    } else {
                        busted = true;
                        sum = 0;
                        return 'bust';    
                    }
                }
            }

        }

        return player;

    }

    return dealer;
}

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
/*  const i_like_to_live_dangerously = deal(4, 5);
 console.log(i_like_to_live_dangerously()); // should log: 9
 console.log(i_like_to_live_dangerously()); // should log: 11
 console.log(i_like_to_live_dangerously()); // should log: 17
 console.log(i_like_to_live_dangerously()); // should log: 18
 console.log(i_like_to_live_dangerously()); // should log: 'bust'
 console.log(i_like_to_live_dangerously()); // should log: 'you are done!'
 console.log(i_like_to_live_dangerously()); // should log: 'you are done!'
 */
 