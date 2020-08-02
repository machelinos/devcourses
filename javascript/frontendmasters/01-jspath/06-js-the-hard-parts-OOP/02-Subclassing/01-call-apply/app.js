/* 
this always refers to the object to the left of the dot on which the function (method) is being called.
UNLESS we override that by runnig the function using .call() or .apply() which lets us set the value of this inside the function.
 */

 const obj = {
     num: 3,
     increment: function(){
         this.num++;
     }
 }

 const otherObj = {
     num: 10
 }

 obj.increment();

 obj.increment.call(otherObj);
 obj.increment.apply(otherObj);