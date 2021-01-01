function CreateSuspectObjects(name){
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log("My name is ", name);
        }
    }
}

var suspects = ['Mis Scarlett', 'Colonel Mustard', 'Mr. White'];
var suspectsList = [];

for(let i=0; i<suspects.length; i++) {
    suspectsList.push(CreateSuspectObjects(suspects[i]));
}

//_.each(list, function)
//Implement _.each(list, function);
let _ = {
    each(list, fn) {
        if(typeof(list)==='object'){
            if(Array.isArray(list)){
                for(let i=0; i<list.length; i++){
                    fn(list[i], i, list);
                }
            } else {
                for(let key in list){
                    fn(list[key], key, list);
                }
            }
        } else {
            console.log('Please use a list');
        }
    }
};

let suspectsListEach = [];

_.each(suspects, function(value, index, list){
    suspectsListEach.push(CreateSuspectObjects(value));
} );

suspectsObj = {
    name: "Rusty",
    color: "Orange"
}

_.each(suspectsObj, function(value, key, list){
    console.log(key, value);
});