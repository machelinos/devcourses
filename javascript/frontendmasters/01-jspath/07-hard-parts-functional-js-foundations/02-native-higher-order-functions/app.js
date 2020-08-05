/* Reduce
    executes a reducer function to each element of the array resulting in a single output every time, the firs time it takes an initial Value we set,then that output will be passed to the nex element in the array in the nex iteration and so on until we get with a single value as output
*/

/*
Reduce under the hood
*/
const reduce = (array, howToCombine, buildingUp)=>{
    for(let i=0; i<array.length; i++){
        buildingUp = howToCombine(buildingUp, array[i]);
    }
    return buildingUp;
}

const add = (a, b) => a+b;

const summed = reduce([1,2,3], add, 0);

//Native reduce
const summedNative = [1,2,3].reduce(add, 0);

/* 
Filter native JS
Filter applies the function to each element of the array and when that returns true it will push the element to the global returned output array
 */
const array = [1, 2, 3, 4, 5, 6];
const greaterThan2 = num => num>2;

//Native filter
const filteredArray = array.filter(greaterThan2);

/* 
Filter under the hood
 */
const filter = (array, test)=>{
    let output = [];
    for(let i=0; i<array.length;i++){
        if(test(array[i])){
            output.push(array[i]);
        }
    }
    return output;
}

const filteredArrayHood = filter(array, greaterThan2);


/*
Chaining HOF
We can chain these Higer order functions (pass the output as the input for the next one)
*/
const sumOfGreaterThan2 = array.filter(greaterThan2).reduce(add, 0);