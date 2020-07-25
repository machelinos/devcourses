/* Challenge 1
A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.
 */
function sumFunc(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

const array = [1, 2, 3, 4];
//console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr){
    let i=0;
    function nextElement(){
        let element = arr[i];
        i++;
        return element;
    }

    return nextElement;
}

const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
//console.log(myIterator()); // -> should log 'a'
//console.log(myIterator()); // -> should log 'b'
//console.log(myIterator()); // -> should log 'c'
//console.log(myIterator()); // -> should log 'd'

/* Challenge 2
Create an iterator with a next method that returns each value of the array when .next is called.
 */

 function nextIterator(arr){
    let i =0;
    let returnedIterator = {
        next: function(){
            let element = arr[i];
            i++;
            return element;
        }
    }
    return returnedIterator;

 }

const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
//console.log(iteratorWithNext.next()); // -> should log 1
//console.log(iteratorWithNext.next()); // -> should log 2
//console.log(iteratorWithNext.next()); // -> should log 3


/* Challenge 3
Write code to iterate through an entire array using your nextIterator and sum the values.
 */
function sumArray(arr){
    const iteratorNext = nextIterator(arr);
    let sum=0;
    let next = iteratorNext.next();
    while(next){
        sum+=next;
        next = iteratorNext.next();
    }
    return sum;
}

// Uncomment the lines below to test your work
//const array4 = [1, 2, 3, 4];
//console.log(sumArray(array4));

/* 
Challenge 4
Create an iterator with a next method that returns each value of a set when .next is called
 */
function setIterator(set){
    let i=0;
    let setIterator = set.values();
    let iterator = {
        next: function(){
            var next = setIterator.next();
            return next['value'];
        }
    }

    return iterator;

}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
//console.log(iterateSet.next()); // -> should log 'h'
//console.log(iterateSet.next()); // -> should log 'e'
//console.log(iterateSet.next()); // -> should log 'y'


/* Challenge 5
Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.
 */
function indexIterator(arr){
    let i =0;
    let iterator = {
        next: function(){
            let arrReturned = [i, arr[i]];
            i++;
            return arrReturned;
        }
    }
    return iterator;
}
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
//console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
//console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
//console.log(iteratorWithIndex.next()); // -> should log [2, 'c']


/* Challenge 6
Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!
 */

function Words(string) {
    this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
    // YOUR CODE HERE
    let index=0;
    const arrWords = this.str.split(/\s/);

    return {
        next: function(){
            if(index<arrWords.length){
                const value = arrWords[index];
                index++;
                return {
                    value: value,
                    done: false
                }
            }else{
                return {done: true}
            }
        }
    }

    
}

const helloWorld = new Words('Hello World');
for (word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'