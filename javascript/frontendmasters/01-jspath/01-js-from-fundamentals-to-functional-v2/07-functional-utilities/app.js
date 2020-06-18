//Currying: When you create a function that can be called multiple times with different arguments
//Composing: take 2 funcitons and combine them
const consider = (name) =>{
    return `I think it could be... ${name}`;
}

const exclaim = statement=>{
    return ` ${statement.toUpperCase()}!`;
}

//IMplementing _.curry for 2 parameters
let _ = {};
_.curry = function(cb){
    return function(arg){
        return function(arg2){
            return cb(arg, arg2);
        }
    }
}

//Implement _.compose for 2 functions parameters only
_.compose = function(fn, fn2){
   return function(arg){
       return fn(fn2(arg));
   }
}

//compose from lo dash, first passes the parameter to the second argument function (exclaim) and then what returns from this functions is passed as argument to the first argument function (consider)
// we dont have lodash so error 
//const blame = _.compose(consider, exclaim);
//blame('You');
//=>'I think it could be... YOU!'

//Closure when you can reference variables from the parent scope even when you are invoking the functions out of that scope
function countClues(){
    var n=0;
    return {
        count: function(){ return ++n },
        reset: function(){ return n=0 }
    };
};

counter = countClues();

//counter object functions will have access to n variable from countCluess because of closure


const makeTimer = ()=>{
    let elapsed=0;

    const stopWatch= ()=>{
        return elapsed;
    }

    const increase = ()=>{
        return elapsed++;
    }

    setInterval(increase, 1000);
    return stopWatch;
};

let timer = makeTimer();