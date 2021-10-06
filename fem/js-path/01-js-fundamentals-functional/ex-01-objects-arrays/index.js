// Create an object using bracket and dot notation that represents the characters and related data in the game of Clue

let clueGame = {};

const locations = 'rooms';

clueGame.characters = ['Mr. Body', 'Mrs. White', 'Dr. Green'];

clueGame['weapons'] = ['Cat', 'Cane', 'Torch'];

clueGame[locations] = ['Conservatory', 'Main Bedroom', 'Hallway', 'Garden'];

console.log(clueGame);
