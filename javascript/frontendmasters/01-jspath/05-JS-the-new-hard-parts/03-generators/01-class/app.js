/*
    Dynamicaly set whgat data flows to us
*/
function *createFlow(){
    const num = 10;
    const newNum = yield num;
    yield 5 + newNum;
    yield 6;
}

const returnNextElement = createFlow();

const element1 = returnNextElement.next(); // => {value: 10, done: false}
const element2 = returnNextElement.next(2); // => {value: 7, done: false}
const element3 = returnNextElement.next(); // => {value: 6, done: false}
