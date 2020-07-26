/* 
Challenge 7
Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
Note: if it is the first element it should say that it is the first
 */

 function valueAndPrevIndex(array){
     let i=0;

     return {
         sentence: function(){
            let output = `We are done with the array ${array}`;
            if(i===0){
                output = `${array[i]} is the first element`;
            }else if(i<array.length){
                output = `${array[i]} was found after index ${i-1}`;
            }
            i++;

             return output;
         }
     }

 }

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


/* Challenge 8
Write a function that will console.log "hello there", or "gibberish", every three seconds depending on if the word passed into the function is 'english'.
Do not use any type of loop constructor and only make the call to createConversation once.
 */
function* createConversation(string){
    if(string==='english'){
        yield 'hello there';
    }else {
        yield 'gibberish';
    }
}

console.log(createConversation('english').next());
console.log(createConversation('whatever').next());