//Currying create a function that can be called multiple times with different arguments

// _.curry(func, [arity=func.length]);
//Curry example
/* let abc = function(a,b,c) {
    return [a,b,c];
}

var curried = _.curry(abc);
curried(1)(2)(3); // => [1,2,3]
curried(1,2)(3); // => [1,2,3]
 */
  //Implement _.curry that only takes up to 2 arguments
  const _ ={};
  _.curry = function(fn){
    const func = (a) => {
        
        const funcB = (b) => {
            return fn(a, b);
        }
        return funcB;
    }
    
    return func;

  }
  let ab = function(a,b){
      return [a, b];
  }
  const curriedAb = _.curry(ab);
  console.log(curriedAb(1)(2));

  //Implement _.compose
  _.compose = function(fn, fn2){
      const func = a => {
            return fn(fn2(a));
      }

      return func;
  }
    
const consider = name => {
     return `I think it could be ... ${name}`;
 }

 const exclaim = statement => {
     return `${statement.toUpperCase()}!`;
 }

 const blame =  _.compose(consider, exclaim);

 console.log(blame('you')); //=> 'I think it could be ... YOU!';

