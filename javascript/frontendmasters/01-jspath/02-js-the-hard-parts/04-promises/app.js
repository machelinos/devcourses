/* Challenge 1
Let's start by reviewing asynchronous functions! Using setTimeout, print the string 'Hello!' after 1000ms.
 */
function sayHello(){
    console.log('Hello!');
}
setTimeout(sayHello, 1000);


/* 
Challenge 2
Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then
*/

var promise = new Promise(function (resolve,reject){
    setTimeout(resolve('Resolved!'), 1000);
}
);
promise.then(()=>{console.log(promise);});


/* Challenge 3
Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch
 */
promise2 = new Promise(function(resolve, reject){
    reject('Rejected!');
});
promise2.catch(e=>{
    console.log(promise2);
});

/* Challenge 4
Promises are asynchronous and we're now going to prove that they indeed are! Create a promise and have it resolve with the value of "Promise has been resolved!" Then uncomment the code at bottom of Challenge 4. What order do we expect "Promise has been resolved!" and "I'm not the promise!" to print? Why?
 */
promise3 = new Promise(function (resolve, reject) {
    resolve('Promise has been resolved');
});
promise3.then(() => console.log('Promise has been resolved 3!'));
console.log("I'm not the promise!");


/* 
Challenge 5
Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms
 */
function delay(){
    var promise4 = new Promise(function(resolve,reject){
        setTimeout(resolve('Resolved 4'), 1000);
    });
    return promise4;
}
delay().then(sayHello);


/* Challenge 6
This challenge we'll chain promises together using ".then" Create two variables: firstPromise and secondPromise Set secondPromise to be a promise that resolves to "Second!" Set firstPromise to be a promise that resolves to secondPromise Call the firstPromise with a ".then", which will return the secondPromise> promise. Then print the contents of the promise after it has been resolved by passing console.log to .then
 */
var secondPromise = new Promise(function(resolve, reject){
    resolve('Second!');
});
var firstPromise = new Promise(function(resolve, reject){
    resolve(secondPromise);
});

firstPromise.then(()=>{console.log(firstPromise)});

/* 
Challenge 7
We have a API that gets data from a database, it takes an index parameter and returns a promise Your challenge is to use Promise.all to make 3 API calls and return all the data when the calls are complete
*/
const fakePeople = [
    { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
    { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
    { name: 'Harold', hasPets: true, currentTemp: 98.3 },
  ]
  
  const fakeAPICall = (i) => {
    const returnTime = Math.floor(Math.random() * 1000);
    return new Promise((resolve, reject) => {
      if (i >= 0 && i < fakePeople.length) {
        setTimeout(() => resolve(fakePeople[i]), returnTime);
      } else {
        reject({ message: "index out of range" });
      }
    });
  };

  function displayData(data){
      console.log(data);
  }
  
  function getAllData() {
    fakePeople.forEach((person, index)=>{
        let promise =fakeAPICall(index);
        promise.then(()=> console.log(promise));

    });
  }

  getAllData();