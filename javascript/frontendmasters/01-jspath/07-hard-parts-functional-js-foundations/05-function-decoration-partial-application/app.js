//Function decoration
const oncify = (convertMe) => {
    let counter = 0;

    const inner = (input) => {
        if(counter===0) {
            const output = convertMe(input);
            counter++;
            return output;
        }
        return "Sorry";
    }

    return inner;
}

const multiplyBy2 = num => num * 2;

const oncifiedMultiplyBy2 = oncify(multiplyBy2);

console.log(oncifiedMultiplyBy2(10)) //=> 20
console.log(oncifiedMultiplyBy2(7)) //=> Sorry



//Partial application
const multiply = (a, b) => a*b;

const prefillFunction = (fn, prefilledValue) => {
    const inner = (liveInput) => {
        const output = fn(liveInput, prefilledValue);
        return output;
    }

    return inner;
}

const multiplyBy2Partial = prefillFunction(multiply, 2);

console.log(multiplyBy2Partial(10));