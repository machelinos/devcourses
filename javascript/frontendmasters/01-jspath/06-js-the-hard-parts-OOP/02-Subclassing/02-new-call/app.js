function userCreator(name, score){
    this.name = name;
    this.score = score;
}

userCreator.prototype.sayName = function(){
    console.log(`I'm ${this.name}`);
}
userCreator.prototype.increment = function(){
    this.score++;
}

//The new keyword automates in the function call: 1.The creation of the object 2. It sets its __proto__ reference to the prototype of the userCreator function and 3. Returns the autocreated object
const user1 = new userCreator("Phil", 5);
const user2 = new userCreator("Tim", 4);

function paidUserCreator(paidName, paidScore, accountBalance){
    //We attach the userCreator constructor to the paidUserCreator with the .call on that function passing this as the object that the function will be called with
    userCreator.call(this, paidName, paidScore);
    this.accountBalance = accountBalance;
}

//Set the paidUserCreator objects created to the userCreator prototype object
paidUserCreator.prototype = Object.create(userCreator.prototype);

//Add the specific funcionality to the object created in it's prototype that already hast the attacched functionalite to the userCreator prototype
paidUserCreator.prototype.increaseBalance = function(){
    this.accountBalance++;
}

const paidUser1 = new paidUserCreator("Alyssa", 8, 25);