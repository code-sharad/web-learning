
// let req = prompt('Please give a request');

const todo = [];

// while(true){
//     let i = 0;
//     if(req == 'quiet'){
//         break;
//     }
//     else if(req == 'list'){
//         console.log('--------------');
//         for(i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log('--------------');
//     }
//     else if(req == 'add'){
//         let task = prompt("Add the task");
//         todo.push(task);
//     }

//     else if(req == 'delete'){
//         todo.splice(i,1)
//     }

//     req = prompt('Please give a request');
// }

// let num = 234395;
// let newnum = num;
// let count = 0;
// let sum = 0;

// count number of digits in num
// while(newnum > 0){
//     newnum = Math.floor(newnum/10);
//     count += 1;
// }

// sum of number 
// while(newnum > 0){
//     sum += newnum%10;
//     newnum = Math.floor(newnum / 10);
// }
// console.log(sum);



// const num = [1,2,3,4,5,1992,23,24,9,84,21]
// let max = 0;
// for(let i =0;i<num.length;i++){
//     if(max < num[i]){
//         max = num[i]
//     }
// }

// console.log(max);


let userInput = prompt("guess the number");
const rand = Math.floor(Math.random() * 10) + 1;
 
while(userInput != 'quiet'){
    userInput = prompt("guess the number");
    if(userInput == rand){
        console.log('great!');
        break;
    }
}