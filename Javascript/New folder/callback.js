
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

// three();

// function saveToDB(data,result,error) {

//     let internetSpeed = Math.floor(Math.random() * 10) + 1

//     return new Promise((resolve, reject) => {
//         if (internetSpeed > 4) {
//             resolve('Your data was saved');
//         } else {
//             reject('weak connection');
//         }
//     })

// }

// saveToDB("hello world")
//     .then((result) => {
//         console.log("data1 saved",result);
//         return saveToDB("nikhil");
//     })
//     .then((result) => {
//         console.log("data2 saved",result);
//         return saveToDB("sharad");
//     })
//     .then((result) => {
//         console.log("data3 saved",result);
//     }) 
//     .catch((error) => {
//         console.log("promise was rejected",error);
//         console.log(error);
//     })


async function greet(){
    throw "some random error"
    return 'hello';
}
























