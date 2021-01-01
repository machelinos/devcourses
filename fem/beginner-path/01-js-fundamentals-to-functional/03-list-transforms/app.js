//Exercise: Loop through the suspects array
const game = {
    'suspects' : [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlett",
            color: "red"
        }
    ]
}

for(let i=0; i<game.suspects.length; i++){
    console.log(game.suspects[i]);
}

//Loop through all the properties of the suspect objects un the suspects array, mark them if you think they are guilty
for(let i=0; i<game.suspects.length; i++){
    for(let key in game.suspects[i]){
        if(game.suspects[i][key]==="red") {
            game.suspects[i]["guilty"] = true;
        }
        console.log(key, game.suspects[i][key]);
    }
}

//destructure this nested data structure into two variables with the strings 'red' and 'orange'
let suspects = [
    {
        name: "Rusty",
        color: "orange"
    }, {
        name: "Miss Scarlet",
        color: "red"
    }
]

let [color1, color2] = [suspects[0].color, suspects[1].color];

///correct answer
let [{color: firstColor}, {color: secondColor}] = suspects;