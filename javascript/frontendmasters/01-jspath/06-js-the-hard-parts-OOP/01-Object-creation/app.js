/* 
Solution 1 Generating Objects using a function.
The main problem with this approach is that we are saving a copy of the increment function for each user we create, which is not performant since we are wasting memory for each of those functions that are the same!
 */
 function userCreator(name, score){
     const newUser = {};
     newUser.name = name;
     newUser.score = score;
     newUser.increment = function(){
         newUser.score++;
     };
     return newUser;
 }
 //const user1 = userCreator("Phil", 4);
 //const user2 = userCreator("Julia", 5);
 //user1.increment();


/*

 Solution 2 Using Object.create
 it creates a reference to the object passed to Object.create and stores in the __proto__ property in the object generated.
*/
function userCreatorObjCreate(name, score){
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment: function(){
        this.score++;
    },
    login: function(){
        console.log("You're alogged in");
    }
}
//const user1 = userCreatorObjCreate("Phil", 4);
//const user2 = userCreatorObjCreate("Julia", 5);
//user1.increment();

/* 
Solution 3 Using new and prototype property
The new keyword automates the object creation and the object return inmediatly, also on the __proto__ property of the object returned it stores a link to the prototype of the creator function
We add the functionality to the function-object combo prototype property
 */

 function UserCreator(name, score){
     this.name = name;
     this.score = score;
 }

 UserCreator.prototype.increment = function(){
     this.score++;
 }

 UserCreator.prototype.login = function(){
     console.log("You're logged in");
 }

//const user1 = new UserCreator("Phil", 4);
//const user2 = new UserCreator("Julia", 5);
//user2.increment();

/* 
 Solution 4 Class keyword
 Throuhg the keyword Class we can have all the functionality bundled with the object constructor in the same declaration
*/
class UserCreatorClass{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    increment(){
        this.score++;
    }

    login(){
        console.log("You're logged in");
    }
}

const user1 = new UserCreatorClass("Phil", 4);
const user2 = new UserCreatorClass("Julia", 5);
user2.increment();