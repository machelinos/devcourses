/* 
Challenge 1
Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
*/
function createFunction(){
    return function(){
        console.log('hello');
    }
}
const function1 = createFunction();
function1(); // => should console.log('hello');

/* 
Challenge 2
Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
 */
function createFunctionPrinter(input){
    return function(){
        console.log(input);
    }
}
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');

/* Challenge 3
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.
 */
function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
}
const willCounter = outer();
const jasCounter = outer();

// /*** Uncomment these to check your work! ***/
willCounter(); //=> counter 1
willCounter(); //=> counter 2
willCounter(); //=> counter 3

jasCounter(); //=> counter 1
willCounter(); //=> counter 4

function addByX(x){
    function addX(input){
        return input+x;
    }
    return addX;
}
const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5
const addByThree = addByX(3);
console.log(addByThree(1)); // => should return 4
console.log(addByThree(2)); // => should return 5
const addByFour = addByX(4);
console.log(addByFour(4)); // => should return 8
console.log(addByFour(5)); // => should return 9

/* Challenge 4
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
 */
function once(cb){
    let count=0;
    let output;
    function callCb(input){
        if(count<1){
            output = cb(input);
        }
        count++;
        return output;
    }

    return callCb;
}

/*
addByTwo = function(input){
    return input+2;
}
onceFunction = function(){
    return
} 
*/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


/* Challenge 5
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
 */
function after(times, cb){
    let count=1;
    let output;
    function callAftertimes(){
        if(count>=times){
            output=cb();
            return output;
        }else{
            count++;
            return;
        }
    }

    return callAftertimes;
}
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
//afterCalled(); // => nothing is printed
//afterCalled(); // => nothing is printed
//afterCalled(); // => 'hello' is printed

/* 
Challenge 6
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
 */
function delay(cb, wait){
    
    return setTimeout(cb, wait);

}

/* Challenge 7
Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
 */
 function rollCall(arr){
     let count=0;

     return function(){
         if(count<=arr.length-1){
            console.log(arr[count]);
            count++;
         }else{
             console.log('Everyone accounted for');
         }
     }

 }

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'


/* Challenge 8
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.
 */
function saveOutput(cb, pass){
    let output={};
    function outputFunc(arg){
        if(pass!==arg){
            output[arg] = cb(arg);
            return output[arg];
        }else{
            return output;
        }
    }
    return outputFunc;
}
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

/* 
Challenge 9
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
*/
function cycleIterator(arr){
    let count=-1;
    function iterate(){
        if(count>=arr.length-1){
            count=0;
        }else{
            count++;
        }

        return arr[count];

    }

    return iterate;
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

/* Challenge 10
Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.
 */

 function defineFirstArg(cb, arg){
     function firstArg(...args){
        return cb(arg, ...args);
     }

     return firstArg;
 }
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15


/* Challenge 11
Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.
 */
function dateStamp(cb){
    let output = {};
    function stamp(){
        let args = Array.from(arguments);
        for(let i=0; i<args.length; i++){
            output.date= Date.now();
            output.output = cb(args[i]);
        }
        return output;
    }
    return stamp;
}
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

/* 
Challenge 12
Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).
 */

 function censor(){
     let stringArrSaved = [];
     let output = '';
     function intern(str1, str2){
        let args = Array.from(arguments);

        if(args.length>1){
            stringArrSaved.push(args);
        }else{
            output = str1;
            for(let i=0; i<stringArrSaved.length; i++){
                output = output.split(stringArrSaved[i][0]).join(stringArrSaved[i][1]);
            }
           return output;
        }

     }
     return intern;
 }
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

/* 
Challenge 13
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret
 */
function createSecretHolder(secret){
    let secretHidden = secret;
    return {
        getSecret(){
            return secretHidden;
        },
        setSecret(secret){
            secretHidden = secret;
        }
    }
}

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5)
//obj.getSecret() // => returns 5
//obj.setSecret(2)
//obj.getSecret() // => returns 2

/* 
Challenge 14
Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.
 */
function callTimes(){
    let count=0;

    function counter(){
        count++;
        return count;
    }

    return counter;
}

let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
//myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


/* Challenge 15
Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.
 */
function russianRoulette(n){
    let count=0;
    function trigger(){
        count++;
        if(count<n){
            return 'click';
        }else if(count===n){
            return 'bang';
        }else{
            return 'reaload to play again';
        }
    }

    return trigger;
}
const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'

/* 
Challenge 16
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.
 */
function average(){
    let times=0;
    let total = 0;
    let output = 0;
    function printAverage(n){
        if(n){
            times++;
            total = total+n;
            output = total/times;
        }
        return output;
    }

    return printAverage;
}
const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


/* Challenge 17
Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.
 */
function makeFuncTester(arr){
    function tester(cb){
        for(let i=0; i< arr.length;i++){
            if(cb(arr[i][0])!==arr[i][1]){
                return false;
            }
        }
        return true;

    }

    return tester;
}

const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


/* Challenge 18
Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that delted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.
 */
function makeHistory(limit){
    let history = [];
    function historyFunc(str){
        if(str==='undo'){
            if(history.length===0){
                return 'nothing to undo';
            }else{
                let todelete = history[history.length-1];
                history.splice(history.length-1, 1);
                return `${todelete} undone`;
            }
        }else{
            if(history.length>=limit){
                history.splice(0, 1);
            }
            history.push(str);
            return `${str} done`;
        }
    }

    return historyFunc;

}

const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'


/* 
Challenge 19
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
function blackjack(arr){

    function dealer(num1, num2){
        let countPlayer=0;
        let sum=0;
        let busted=false;
    
        function player(){
            countPlayer++;
            if((countPlayer-1)===0){
                return num1+num2;
            }else{
                if((countPlayer-1)===1){
                    sum = sum+arr[countPlayer-1]+num1+num2;
                }else{
                    sum = sum+arr[countPlayer-1];
                }
                if(sum>21){
                    if(busted){
                        return 'yoe are done!';
                    }
                    busted=true;
                    return 'bust';
                }else{
                    return sum;
                }
            }
        }

        return player;

    }

    return dealer;
}

const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 15
console.log(i_like_to_live_dangerously()); // => should log 16
console.log(i_like_to_live_dangerously()); // => should log bust
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!