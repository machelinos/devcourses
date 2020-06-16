//Arrow functions
//One of the differences is that the arguments array which we have in regular functions on arrow functions would be undefined
var nameImprover = (name, adj) => {
    return `Col ${name} Mc ${adj} pants`;
};


//Filter and map to get the suspects names
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

//Filter for present only
function checkForPresence(item){
    return item.present;
}

//let presentSubjects = videoData.filter(checkForPresence);

function suspectName(item){
    return item.name;
}
//Map for names
//let suspects = presentSubjects.map(suspectName);

//Simplifying to one line
let suspects = videoData.filter(checkForPresence).map(suspectName);

//Default values
const add = function(a, b=2){
    console.log(arguments);
    return a+b;
}

//Rewrite default value on ES5
const addEs5 = function(a, b ){
    b = b || 2;
    console.log(arguments);
    return a+b;
}

addEs5(3);

//Array like object
// for example the arguments array like that is an argument in all funciotns, but is not an array
// to convert to array

//ES5
//const arrayNew = Array.prototype.slice.call(arguments);
//=> converts the array object to an array

//ES6
//Array.from(arguments);
//=> converts the array object to an array

//Implement _.from
let _ = {};

_.from = function(arguments){
    return Array.prototype.slice.call(arguments);
}