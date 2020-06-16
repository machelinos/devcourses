const game = {
    'suspects' : [
        {
            name: 'Rusty',
            color: 'orange'
        },
        {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ]
}

//loop through suspects
for(let i=0; i<game.suspects.length; i++){
    console.log(game.suspects[i]);
}

game.suspects.forEach(suspect=>{
    console.log(suspect);
});

for(let suspect of game.suspects){

    //loop through object
    for(let prop in suspect){
        console.log(prop, suspect[prop]);
        if(suspect[prop]==='Rusty'){
            suspect.guilty = true
        }
    }

    console.log(suspect);

}

//Destructure
var suspects = [
    {
        name: 'Rusty',
        color: 'orange'
    },
    {
        name: 'Miss Scarlet',
        color: 'red'
    }
];

var [color1, color2] = suspects.map(suspect=>{
    return suspect.color;
});

var [{color: firstColor}, {color: secondColor}] = suspects;

