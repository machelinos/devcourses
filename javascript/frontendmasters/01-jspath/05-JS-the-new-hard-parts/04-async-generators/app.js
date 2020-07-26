function* createFlow(){
    //yield super power gets the createFlow function paused before saving to the constant data, which will be filled when the next next() invocation with an argument is called
    const data = yield fetch('https://jsonplaceholder.typicode.com/todos/1');

    //This code will be deffered an run after the functions gets resumed with a call to next();
    console.log(data);
}


//Function to define when we want the defered code in createFlow to be run
function doWhenDataReceived(value){
    returnNextElement.next(value);
}

//"Saves" the generator function code to the definition of returnNextElement
const returnNextElement = createFlow();

//"Saves" to futureData the first yield from the referenced createFlow funciton code that is saved in returnNextElement. Since its a fetch run, i will save the Promise object to futureData
const futureData = returnNextElement.next();

//Pushes the function doWhenDatasReceived to the onfullfillment hidden property pof the Promise object saved in futureData so when the value of this object gets defined asynchronously it will call the function
futureData.value.then(doWhenDataReceived);
futureData.value.catch(err=>console.log(err));