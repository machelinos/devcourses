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
console.log(avgSoFar()); // should log: 0
 console.log(avgSoFar(4)); // should log: 4
 console.log(avgSoFar(8)); // should log: 6
 console.log(avgSoFar()); // should log: 6
 console.log(avgSoFar(12)); // should log: 8
 console.log(avgSoFar()); // should log: 8