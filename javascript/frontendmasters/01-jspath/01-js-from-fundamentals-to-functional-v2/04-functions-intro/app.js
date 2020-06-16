function CreateSuspectObjects(name){
    return {
        name: name,
        color: name.split(' ')[1],
        speak(){
            console.log('my name is ', name);
        }
    }
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

suspects.forEach(suspect=>{
    suspectsList.push(CreateSuspectObjects(suspect));
});

let _ = {};
//Implementing _.each
_.each = function(list, callback){
    if(Array.isArray(list)){
        for(let i=0; i<list.length; i++){
            callback(list[i], i, list);
        }
    }else{
        for(let key in list){
            callback(list[key], key, list);
        }
    }
}

//Looping with _.each uses underscore.js
_.each(suspects, function(suspect){
    let suspectObj = CreateSuspectObjects(suspect);
    suspectsList.push(suspectObj);
});

var rooms = ['observatory', 'ballroom', 'library'];
var logger = function(val){
    console.log(val);
}

rooms.forEach(room=>{
    logger(room);
});

//Implementing _.map
_.map = function(list, callback){
    let mapArray = [];
    if(Array.isArray(list)){
        for(let i=0; i<list.length; i++){
            mapArray.push(callback(list[i], i, list));
        }
    }else{
        for(key in list){
            mapArray.push(callback(list[key], key, list));
        }
    }
    return mapArray;

}

//Map with _.map
const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item){
    return `broken ${item}`;
}

const broken = _.map(weapons, makeBroken);

//Implementing _.filter
_.filter = function(list, callback){
    let filterArray=[];
    if(Array.isArray(list)){
        for(let i=0; i<list.length; i++){
            if(callback(list[i], i, list)){
                filterArray.push(list[i]);
            }
        }
    }else{
        for(key in list){
            if(callback(list[key], key, list)){
                filterArray.push(list[key]);
            }
        }
    }
    return filterArray;
}

const arrayToTest= [true, false, true, true, false];

function testArray(value){
    return value ? value : null;
}

let filteredArray = _.filter(arrayToTest, testArray);

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

const present = _.filter(videoData, checkForPresence);

function checkForPresence(item){
    return item.present;
}