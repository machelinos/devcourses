//HIGHER ORDER FUNCTIONS
//Takes a function as an input
window.addEventListener('change', ()=>{
    console.log('Our evidence is updated');
});

//Returns a function as an output
const newClue = (name) => {
    const length = name.length;

    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue%1);
    }
}

//Callbacks
const ifElse = (condition, isTrue, isFalse)=>{
    return condition ? isTrue() : isFalse();
}

ifElse(true, ()=>{ console.log('True');}, ()=>{console.log('false');} );

//Passing arguments
/* var increment = function(n){
    return n+1;
}
var square = function(n){
    return n*n;
}
var doMathSoIdontHaveto = function(n, func){
    return func(n);
} */


//passing arguments translate to ES6
const increment = n=> n+1;
const square = n=> n*n;

const doMathSoIdontHaveto = (n, func)=> func(n);

doMathSoIdontHaveto(5, increment); //=>6
doMathSoIdontHaveto(3, square); //=> 9

//Implementing _.reduce
let _ = {};
_.reduce = function(list, cb, initialValue){
    let memo = null;
    memo = memo || initialValue;
    if(Array.isArray(list)){
        for(let i=0; i<list.length; i++){
            if(!memo){
                memo = list[i];
            }else{
                memo=cb(memo, list[i]);
            }
        }
    }else{
        for(key in list){
            if(!memo){
                memo = list[key];
            }else{
                memo = cb(memo, list[key], key);
            }
        }
    }
    return memo;
}


//Exercise
//Figure out which room no one claims to be the night of the murder from this data set
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

let resultoutput=_.reduce(newDevelopment, findRoom, []);

function findRoom(result, value){ // first iteration result = {} value = Miss Scarlet obj or other
    if(result.length===0){
        result=value.rooms.map(function(item){
            for(key in item){
                if(item[key]===false){
                    return key;
                }
            }
    
        });
    }else{
        var arr2 = value.rooms.map(function(item){
            for(key in item){
                if(item[key]===false){
                    return key;
                }
            }
    
        });

        arr2.forEach((element, index) => {
            if(result.indexOf(element)>-1){
                result.splice(index,1);
            }
        });   

    }

    return result;
    
}
