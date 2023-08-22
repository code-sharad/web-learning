


let arr1 = ['Hi']
let arr2 = ['Hi']
console.log(arr1 === arr2);  // False, because their reference or address is different


// if we want to check the value is same then we use JSON.stringify
let arr1Str = JSON.stringify(arr1);
let arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); // True, because reference is same.




// Passing parameter in function
// Pure Function :- We refer to functions that don’t affect anything in the outside scope as pure functions

function changeAgePure(person){
    let newPersonObj = JSON.parse(JSON.stringify(person));
    // let newPersonObj = new Array(person);
    newPersonObj.age = 25;
    return newPersonObj;
}

const sharad = {
    name:"sharad",
    age:30
}

const changeSharad = changeAgePure(sharad);
console.log(sharad);
console.log(changeSharad);


//Impure Function :-

function changeAgeImpure(person){
    person.age = 25;
    return person;
}

const nikhil ={
    name:"Nikhil",
    age:30
}

const changeNikhil = changeAgeImpure(nikhil);

// console.log(nikhil);   // { name: 'Nikhil', age: 25 }
// console.log(changeNikhil); // { name: 'Nikhil', age: 25 }




// Practise

function changeAgeandReference(person){
    person.age = 25;
    person = { // new object
        name:"Sanket",
        age:23
    }
    return person;
}


const virat = {
    name:"Virat",
    age:35
}

const newSanket = changeAgeandReference(virat);
console.log(virat);
console.log(newSanket);



var personObj1 = {
    name: 'Alex',
    age: 30
};
var person = personObj1;
person.age = 25;
person = {
  name: 'john',
  age: 50
};
var personObj2 = person;
console.log(personObj1); // -> { name: 'Alex', age: 25 }
console.log(personObj2); // -> { name: 'John', age: '50' }