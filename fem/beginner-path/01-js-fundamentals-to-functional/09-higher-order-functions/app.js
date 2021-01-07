/*
* Higher order functions takes functions as arguments
* Return a function as the output
* Callbacks are fnuctions that we pass to functions
*/
var increment = n => n + 1;

var square = n => n * n;

var doMathSoIDontHaveTo = (n, func) => func(n);

console.log(doMathSoIDontHaveTo(5, square)); //=> 25
console.log(doMathSoIDontHaveTo(4, increment)); // => 5

//Implement _.reduce(collection,calbback, accumulator)
const _ = {};
_.reduce = function(list, fn, memo){
    if(typeof(list)==='object'){
        if(Array.isArray(list)){
            for(let i=0; i<list.length; i++){
                if(i===0 && memo === undefined){
                    memo = list[0];
                }else{
                    memo = fn(memo, list[i], i, list);
                }
            }

            return memo;

        }else {
            for(let key in list){
                if(memo){
                    memo = fn(memo, list[key], key, list);
                }else{
                    memo = list[key];
                }
                return memo;
            }

        }
    }else{
        alert('Please use a list to use reduce');
    }
}

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);

//Exercise: Find the room nowhere claimed to be in
const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

let notInRoom = function(suspect, memo){
    _.reduce(suspect.rooms, function(room, memo, []))
}

_.reduce(newDevelopment, notInRoom);

