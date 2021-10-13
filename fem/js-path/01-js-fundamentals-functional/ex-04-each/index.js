// Implement _.each
let _ = {};

_.each = function (list, callback) {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    } else {
        for (let key in list) {
            callback(list[key], key, list);
        }
    }
}

// testing
function CreateSuspectsObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`My name is ${name}`);
        }
    }
}

const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
let suspectsList = [];

_.each(suspects, (suspect) => {
    suspectsList.push(CreateSuspectsObjects(suspect));
});