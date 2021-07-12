//using template literals and tag functions
function upper (strings, ...values) {
    let str = '';
    for(let i=0; i<strings.length; i++) {
        if(i > 0) {
            str+=String(values[i-1]).toUpperCase();
        }

        str+= strings[i];
    }
    return str;
}

const nombre = "marcel", twitter = "machelinos", topic = "JS Recent parts";

console.log(upper`Hello ${nombre} (@${twitter}), welcome to ${topic}` === "Hello MARCEL (@MACHELINOS), welcome to JS RECENT PARTS");