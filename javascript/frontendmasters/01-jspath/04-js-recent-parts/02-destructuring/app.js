//Example 1
//old school way
function data() {
    return [1,2,3];
}

var temp = data();
var first = temp[0];
var second = temp[1];
var third = temp[2];

//Desctructuring
var [firstDest, secondDest, thirdDest] = data();

//Swapping with destructuring
var x = 10;
var y = 20;

[x, y] = [y, x]; // x=20 y=10

//using destructring in parameters
function dataParam( [
    first,
    second,
    third
]) {
    // we can pass an array and we will have the first 3 elements saved in our destructured variables to use in the body of the function
}

//nested destructuring
function dataNested() {
    return [1,[2,3],4];
}

var [
    first,
    [
        second,
        third
    ],
    fourth
] = tmp = dataNested();


// OBJECT DESTRUCTURING
function dataObj() {
    return {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    }
}

var {
    // source : target = default
    a: first = 42, //1
    b: second, // 2
    c: third, // 3
    // agregator, object rest
    ...fourth // new object with the agregated properties {d: 4, d: 5}
} = dataObj();

// when not declaring the obj destructured as a variable, we can distinguish as destructuring putting all blovk in parenthesis
var firstObjDest, secondObjDest;
// aprenthesis serve as indicator that is a destructuring pattern and not a block, which would be not allowed on left hand side
({
    a: firstObjDest,
    b: secondObjDest
} = dataObj());

// Nested object desctructuring pattern
function nestedObj() {
    return {
        a: 1,
        b: {
            c: 3,
            d: 4
        }
    }
}

var  {
    a,
    b: {
        c,
        d
    } = {}
} = nestedObj();