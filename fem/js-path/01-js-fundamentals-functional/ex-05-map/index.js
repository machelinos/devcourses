// Implement _.map so that we can create an array of broken weapons
let _ = {};

_.map = function (list, callback) {
    let output;
    if (Array.isArray(list)) {
        output = [];
        for (let i = 0; i < list.length; i++) {
            output.push(callback(list[i], i, list));
        }
    } else {
        output = {};
        for (let key in list) {
            output[key] = callback(list[key], key, list);
        }
    }

    return output;
}

const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function (item) {
    return `broken ${item}`;
}

const brokenWeapons = _.map(weapons, makeBroken);
console.log(brokenWeapons);