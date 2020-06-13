//Create an object using bracket and dot notation that represents the characaters and related data you may find in a game of Clue.

let clue = {};


clue.characters = [
    {
        name: 'Bianca',
        guilty: false
    },
    {
        name: 'Joyce',
        guilty: false
    },
    {
        name: 'Marcel',
        guilty: false
    }
];

clue.characters[0]['guilty']=true;
clue.rooms = ['Library','Bedroom', 'Observatory', 'Chappel', 'Diner room'];
clue['weapons'] = ['candle stick','Machete', 'Pipe wrench'];
clue.box = {
    charName: 'Bianca',
    roomName: 'Observatory',
    weapon: 'Machete'
}


console.log(clue);
