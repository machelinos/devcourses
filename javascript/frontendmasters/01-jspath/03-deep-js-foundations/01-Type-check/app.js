// TODO: define polyfill for `Object.is(..)`
if(!Object.is || true){
    Object.is = function ObjectIs(value1, value2){
        
        if (value1 === 0 && value2 === 0){
            if(1/value1 === 1/value2){
                return true;
            }else{
                return false;
            }
        }

        if(Number.isNaN(value1) && Number.isNaN(value2)){
            return true;
        }
        
        return value1 === value2;

    }
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
