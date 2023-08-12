// let todo = [];

// let req = prompt("please enter you request");

// while (true) {



//     if (req == "list") {
//         console.log("_ _ _ _ _ _ _ _ _ _");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("_ _ _ _ _ _ _ _ _ _");
//     }

//     else if (req =="quit") {
//         console.log("quitting the app:");
//         break;
//     }

//     else if (req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }

//     else if (req == "delete") {
//         let idx = prompt("enter the index of list to delete the task");
//         todo.splice(idx, 1);
//         console.log("tas deleted");
//     }

//     else {
//         console.log("enter the valid");
//     }

//     req = prompt("please enter you request");




// }


// const calculator = {

//     add(a,b) {
//         return a+b
//     },
//     sub(a,b){
//         return a-b
//     },
//     mul(a,b){
//         return a*b
//     },
//     div(a,b){
//         return a/b
//     }
// }

// const arr = [32,54,3,8,45,89]

// function largerThan(arr,a){
//     let temparr = [];
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] > a){
//             temparr.push(arr[i]);
//         }
//     }

//     return temparr;
// }

// const a = largerThan(arr,4);



// const str = "sharad";


// let ans = "";
// for(let i = 0;i<str.length;i++){
//     let currChar = str[i];
//     if(ans.indexOf(currChar) == -1){
//         ans += currChar;
//     }
// }
// console.log(ans);


// country=[";lakdsjf;lkjads;lfjl","Australia","Germany","United States of America","kaldsfjl;"]
// let large = country[0];
// for(let i =0;i<country.length;i++){
//     if(country[i].length > country[0].length){
//         large = country[i]
//     }
// }

// console.log(large);



const pow = (a, b) => (
    a ** b
);

// const pow = (a,b) => a**b;

// const pow = (a,b) => {
//     return a**b;
// }

// console.log("Hi, I'm here");
// setInterval(() => {
//     console.log("after 4 second");
// }, 4000);

// setInterval(() => {
//     console.log("sharad");
// }, 1000);


const marks = [95, 97, 93, 2]

const arrayAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

console.log(arrayAverage(marks));


 //Below code will not return even or odd because of {}

// const isEven = (a) => {
//     a % 2 == 0 ? "even" : "odd"
// };


 //Below code will return even or odd because of ()
const isEven = (a) => (
    a % 2 == 0 ? "even" : "odd"
);

console.log(isEven(7));

const object = {
    message:"hello, world",

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);


