//Advanced scope
var myAlert = () => { 
    const x = "Help! i think i found a clue!";
    const alerter = () => { alert(x); };
    alerter();  
};

const myAlert02 = () => {
    const x = "Help! i think i found a clue!";  
    const alerter = () => { alert(x); };
    setTimeout(alerter,1000);
    console.log("Ehat happens first, this log or the alert?"); //the log
}

const myAlert03 = () => {
    const x = "Help! i think i found a clue!";
    let count = 0;
    const alerter = () => { alert(`${x} ${++count}`); };
    return alerter;
}

const funcAlert = myAlert03();
const funcAlert02 = myAlert03();

//Closure
const newClue = (name) => {
    const length = name.length;

    return weapon => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    }
}
const didGreenDoItWithA = newClue("Rev. Green");
console.log(didGreenDoItWithA("Candlestick"));


/////
function countClues(){
    var n=0;

    return {
        count: function(){return ++n;},
        reset: function(){return n=0;}
    }
}

let count01 = countClues();

//Closure Recipe
/*
1. Create your parent function
2. Define some variables in the parent's local scope
3. Define a function inside the parent function
4. Return that function from inside the parent function
*/

const makeTimer = () => {
    let elapsed= 0;
    const stopWatch = () => {
        return elapsed;
    }

    const increase = () => { elapsed++ };

    setInterval(increase, 1000);

    return stopWatch;
}
let timer = makeTimer();

//////
