//_.map()
//returns an array from a list that is trnsformed to the new array
//_.map(list, fn(value, index, list)) => for arrays
//_.map(list, fn(value, key, list)) => for objects

let _ = {};

//Implement _.map
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

const weapons = ['candlestick','lead pipe', 'revolver'];
const makeBroken = function(item) {
    return `broken ${item}`;
}

let mappedArray = _.map(weapons, makeBroken);

//With object
const obj = {one: 1, two: 2, three: 3};
const multiplyBy2 = function(value){
    return value*2;
}

let mappedObj = _.map(obj, multiplyBy2);