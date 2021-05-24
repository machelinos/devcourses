//Higher order functions, functions that can have functions as parameters
function copyArrayAndManipulate(array, instructions){
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(instructions(array[i]));
    }

    return output;
}

function multiplyBy2(input){
    return input*2;
}

const result = copyArrayAndManipulate([1,2,3], multiplyBy2);

//Challenge 1
//Create a function addTwo that accepts one input and adds 2 to it.
function addTwo(num){
    return num+2;
}

//Challenge 2
//Create a function addS that accepts one input and adds an "s" to it.
function addS(word){
    return word+'s';
}

/* Challenge 3
Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. */
function map(array, callback){
    let output = [];

    for(let i=0; i<array.length; i++){
        output.push(callback(array[i]));
    }

    return output;
}

/* 
Challenge 4
The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
*/
function forEach(array, callback){
    for(let i=0; i<array.length; i++){
        callback(array[i]);
    }
}

/* 
Challenge 5
In the first part of this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
*/
function mapWith(array, callback){
    let output = [];

    forEach(array,function(value){
        output.push(callback(value));
    });

    return output;

}

/* Challenge 6
The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
 */
function reduce(array, callback, initialValue){
    let result = null;
    result = null || initialValue;
    for(let i=0; i<array.length; i++){
        result = callback(result, array[i]);
    }
    return result;
}

/* Challenge 7
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.
 */
function intersection(arrays){
    let output = reduce(arrays, intersect, arrays[0]);

    function intersect(array1, array2){
        let outputFn = [];
        forEach(array1, function(item1){
            forEach(array2, function(item2){
                if(item1===item2){
                    outputFn.push(item1);
                }
            });
        }); 
        return outputFn;
    }

    return output;
    
}
//console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
//=> [5, 15]

/*
Challenge 8
Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/
function union(arrays){
    let output = reduce(arrays, unite, []);

    function unite(arr1, arr2){
        let outputFn = arr1;
        if(outputFn.length>0){
            forEach(arr2, function(item2){
                let isInTheArray1 = 0;
                forEach(outputFn, function(itemOutput){
                    if(item2===itemOutput){
                        isInTheArray1++;
                    }

                });

                if(isInTheArray1===0){
                    outputFn.push(item2);
                }
            });
    
        }else{
            outputFn = arr2;
        }
        return outputFn;
    }

    return output;
}
console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
//=> [5, 10, 15, 88, 1, 7, 100]

/* 
Challenge 9
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value. 
*/
function objOfMatches(arr1, arr2, callback){
    let output = {};

    for(let i=0; i<arr1.length; i++){
        let key = callback(arr1[i]);
        if(key===arr2[i]){
            output[arr1[i]]=arr2[i];
        }

    }

    return output;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// => { hi: 'HI', bye: 'BYE', later: 'LATER' }

/* 
Challenge 10 Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key. */
function multiMap(values, callbacks){
    let output = {};

    for(let i=0; i<values.length; i++){
        let key = values[i];
        output[key] = [];

        forEach(callbacks, function(cb){
            output[key].push(cb(key))
        });
    }

    return output;
}
console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// => { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/* 
Challenge 11
Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.
 */
function objectFilter(obj, callback){
    let output = {};

    for(key in obj){
        let manipulatedKey = callback(key);

        if(manipulatedKey===obj[key]){
            output[key] = obj[key];
        }
    }

    return output;
}

const cities = {
    London: 'LONDON',
    LA: 'Los Angeles',
    Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase())) 
// => { London: 'LONDON', Paris: 'PARIS'}

/* 
Challenge 12
Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.
*/
function majority(arr, cb){
    let counter=0;

    forEach(arr, function(item){
        if(cb(item)&&arr.length/2>counter){
            counter++;
        }
    });
    if((arr.length/2)<counter){
        return true;
    }else{
        return false;
    }

}

const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 1, 1, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

/* 
Challenge 13
Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
 */

function prioritize(array, callback) {
    let trues = [], falses =[];
    forEach(array, function(item){
      if(callback(item)){
        trues.push(item);
      } else {
        falses.push(item);
      }
    });
    
    return trues.concat(falses)
    
  }

const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS));


/* Challenge 14
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.
 */
function countBy(array, callback) {
    let output = {};
    
    forEach(array, function(item){
      let valueReturned = callback(item);
      for(let key in output){
        if(valueReturned === key){
          output[valueReturned]++;
          return;
        } 
      }
      output[valueReturned]=1;
    });
      
    return output;
  }

console.log(countBy([1, 2, 3, 4, 5], function(num) {
if (num % 2 === 0) return 'even';
else return 'odd';
}));
// => { odd: 3, even: 2 }

/* Challenge 15
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.
 */
function groupBy(arr, cb){
    let output = {};

    forEach(arr, function(item){
        let keyOutput = cb(item);
        
        if(Object.keys(output).length===0){
            output[keyOutput]=[item];
        }else{
            for(key in output){
                //we use loose comparison for string key and number keyOutput
                if(key==keyOutput){
                    output[keyOutput].push(item);
                }else{
                    if(output[keyOutput]===undefined){
                        output[keyOutput]=[item];
                    }
                }
            }
        }
    });

    return output;
}
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored));


/* Challenge 16
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.
 */
function goodKeys(obj, cb){
    let output =[];
    for(key in obj){
        if(cb(obj[key])){
            output.push(key);
        }
    }

    return output;
}
const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); 
//=> should log: ['charlie', 'dee']


/* Challenge 17
Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).
 */
function commutative(cb1, cb2, value){
    let result1= cb2(cb1(value));
    let result2= cb1(cb2(value));
    return result1===result2 ? true : false;
}

const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

/* Challenge 18
Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object.
 */
function objFilter(obj, cb){
    let output = {};

    for(key in obj){
        if(obj[key]===cb(key)){
            output[key] = obj[key];
        }
    }

    return output;
}

const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); 
//=> should log: { 2: 1, 6: 3 }


/* Challenge 19
Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input.
 */
function rating(funcArr, value){
    let counter=0;
    forEach(funcArr, function(func){
        if(func(value)){
            counter++;
        }
    });

    return (counter/funcArr.length)*100;

}

const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); 
//=> 100
console.log(rating(checks, 66));
//=> 75


/* Challenge 20
Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.
 */
function pipe(funcArr, value){

    forEach(funcArr, function(func){
        value = func(value);
    });

    return value;
}
const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat'));
//=> 'CATcatCATcat'

/* 
Challenge 21
Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.
 */
function highestFunc(obj, subject){
    let keyHighest=null;

    for(key in obj){
        if(keyHighest===null){
            keyHighest=key;
        }else{
            if(obj[key](subject)>obj[keyHighest](subject)){
                keyHighest = key;
            }
        }

    }
    return keyHighest;
}
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5));
//=>'addTen'
console.log(highestFunc(groupOfFuncs, 11));
//=>'double'
console.log(highestFunc(groupOfFuncs, -20));
//=>'inverse'


/* Challenge 22
Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. combineOperations should pass the starting value into the first function in the array. combineOperations should pass the value returned by the first function into the second function, and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array.
 */
function combineOperations(val, funcArr){
    forEach(funcArr, function(func){
        val = func(val);
    });

    return val;
}

function add100(num) {
    return num + 100;
  }
  function addTen(num) {
    return num + 10;
  }
  function divByFive(num) {
    return num / 5;
  }
  
  function multiplyByThree(num) {
    return num * 3;
  }
  function multiplyFive(num) {
    return num * 5;
  }
console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); //=> 60
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); //=> 10

/* 
Challenge 23
Define a function myFunc that takes an array and a callback. myFunc should pass each element from the array (in order) into the callback. If the callback returns true, myFunc should return the index of the current element. If the callback never returns true, myFunc should return -1;
 */
function myFunc(arr, cb){
    for(let i=0; i<arr.length; i++){
        if(cb(arr[i])){
            return i;
        }
    }

    return -1;
}
const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

console.log(myFunc(numbers, isOdd)); //=> 1
console.log(myFunc(evens, isOdd)); //=> -1

/* Challenge 24
Write a function myForEach that accepts an array and a callback function. Your function should pass each element of the array (in order) into the callback function. The behavior of this function should mirror the functionality of the native .forEach() JavaScript array method as closely as possible.
 */
function myForEach(arr, cb){
    for(let i=0; i<arr.length; i++){
        cb(arr[i], i, arr);
    }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}
const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log(sum); // Should output 6