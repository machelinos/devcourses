const game = {
    'suspects': [
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

// EX 01 and 02: Loop an array in an object and mark the guilty one
function loopArrayFromObj(obj, arrayName, guiltyPerson) {
    isGuiltyPersonInObj = false;
    if (obj[arrayName]) {
        for (let element of obj[arrayName]) {
            if (element.name === guiltyPerson) {
                isGuiltyPersonInObj = true;
                element.guilty = true;
            }
            for (key in element) {
                console.log(`${key}: ${element[key]}`);
            }
        }
        if (isGuiltyPersonInObj) {
            console.log(`The guilty person is: ${guiltyPerson}`);
        } else {
            console.log('The guilty person is not in the list of suspects');
        }
    } else {
        console.log(`there is not an array named ${arrayName}`);
    }
}

loopArrayFromObj(game, 'suspects');

// ex 03 : Destructure this nested structure into two variables with the strings red and orange
const suspects = [
    {
        name: 'Rusty',
        color: 'orange'
    },
    {
        name: 'Miss Scarlet',
        color: 'red'
    }
]

// same result
const [color1, color2] = suspects.map(suspect => suspect.color);
const [{ color: firstColor }, { color: secondColor }] = suspects;
