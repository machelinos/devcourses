/* 
Challenge 9
Use async/await to console.log a sentence comprised of a noun and verb in which the non async function takes in a noun, concatenates it with a hard coded verb and returns it to the async function to be console.logged after a duration of 3 seconds. Call the async function only once, feeding it a noun to make this happen.
 */

function waitForVerb(noun){
    return noun+' barfs';
}

async function f(noun){
    const data = await waitForVerb(noun);
    setTimeout(function(){
        console.log(data);
    },3000);
}

f("dog");