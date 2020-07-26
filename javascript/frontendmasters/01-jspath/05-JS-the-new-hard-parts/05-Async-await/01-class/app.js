// Async await simplifies all the async generators function and removes the ned for the storage of a function on the promise object returned by fetch and the call to next on the returnnextElement object.
async function createFlow(){
    console.log('Me first');

    //Await behaves like yield in the sense that it pauses the function run and throws oput of the function immediatly
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    //The code after await is the code that is defered for when awaits gets back with a response
    console.log(data);
}

createFlow();

console.log('Me second');