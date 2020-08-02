/* 
Solution 1
Subclassing with factory functions
 */

 function userCreator(name, score){
    const newUser = Object.create(userFunctions);
    newUser.name = name;
    newUser.score = score;
    return newUser;
 }

 userFunctions = {
     sayName: function(){
         console.log(`I'm ${this.name}`);
     },
     increment: function(){
         this.score++;
     }
 }

 const user1 = userCreator("Phil", 5);
 //user1.sayName();

 function paidUserCreator(paidName, paidScore, accountBalance){
     const newPaidUser = userCreator(paidName, paidScore);
     //we set the __proto__ property of our new object to the specific funcionality added to them
     Object.setPrototypeOf(newPaidUser, paidUserFunctions);
     newPaidUser.accountBalance = accountBalance;
     return newPaidUser;
 }

 //This is the specific functionality for the paid user object
 const paidUserFunctions = {
     increaseBalance: function(){
         this.accountBalance++;
     }
 }

 //We attach the general user functionality to the __proto__ property of the specific function object combo so that the paid user also has access to the general funcionality
 Object.setPrototypeOf(paidUserFunctions, userFunctions);

 const paidUser = paidUserCreator("Alyssa", 8, 25);

 paidUser.increaseBalance();
 console.log(paidUser.accountBalance);