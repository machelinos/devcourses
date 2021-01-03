const _ = {};
_.filter = function(list, fn) {
    if(typeof(list)==='object'){
        let output = [];
        if(Array.isArray(list)){
            for(let i=0; i<list.length; i++){
                if(fn(list[i], i, list)) output.push(list[i]);
            }

        }else{
            for(let key in list){
                if(fn(list[key], key, list)) output.push(list[key]);
            }
        }
        return output;
    } else {
        alert("please use a list as input");
    }
}

_.map = function(list, fn) {
    if( typeof(list) === 'object' ){
        let output = [];
        if(Array.isArray(list)){
            for(let i=0; i<list.length; i++){
                output.push(fn(list[i], i, list));
            }
        } else {
            for(key in list){
                output.push(fn(list[key], key, list));
            }
        }
        return output;
    }else {
        alert('Please use a list');
    }
}

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

//Filter the video data array by present key set to true and then map the result of this filter by name (we will have an array of string names as final result)
const result = _.map(_.filter(videoData, function(value, index, list){
    return value.present;
}), function(value, index, list){
    return value.name;
});

//Spread operator
const createTuple = (a, b, c, ...d) => {
    return [[a,c], [b,d]];
}
const tuple = createTuple('It','be','could','anyone','no one'); //=> [['It','could'], ['be', ['anyone', 'no one]];

//arguments keyword. (Deprecated, no longer use!!)
//Inside a function represents as a pseudo array (dont have access to array methods) that references all arguments passed to the function
//useful when we dont know how many parameters are defined in the fnuction

//Default parameters ES6
//whe definie in the function the default values for the aprameters, and if the function is invoked without the argument, it will use the default value
const add = (a,b=2) => {
    return a+b;
};
add(3); //=> 5

//Array like object
//kind of array that doesnt have array methods (objecthas length and indexed properties)
let ao1 = {length: 0};
let ao2 = {0: 'foo', 5: 'bar', length: 6};
//we can convert array like object to arrays using slice
let ao2Arr = Array.prototype.slice.call(ao2); 
console.log(ao2Arr); // => ['foo', empty, empty, empty, empty, 'bar'];

//in ES6 we can also use Array.from(array like onj) to covert it to array
let ao1Arr = Array.from(ao1);
console.log(ao1Arr); //=> [];

//Implement _.from

_.from = function(arrlikeobject) {
    let output = [];
    for(let i=0; i<arrlikeobject.length; i++){
        output.push(arrlikeobject[i]);
    }
    return output;
}

let ao2ArrOwn = _.from(ao2);
console.log(ao2ArrOwn);