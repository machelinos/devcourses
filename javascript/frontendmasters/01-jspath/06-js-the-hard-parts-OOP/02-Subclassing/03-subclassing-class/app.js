class userCreator{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    sayName(){
        console.log(`I'm ${this.name}`);
    }
    increment(){
        this.score++;
    }
}

const user1 = new userCreator("Phil", 4);
const user2 = new userCreator("Tim", 4);

class paidUserCreator extends userCreator{
    constructor(paidName, paidScore, accountBalance){
        super(paidName, paidScore);
        this.accountBalance = accountBalance;
    }

    increaseBalance(){
        this.accountBalance++;
    }
}

const paidUser1 = new paidUserCreator("Alyssa", 8, 25);