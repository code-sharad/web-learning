

const num = [1,2,3,4,5]
const square = num.map(n => n*n);
console.log(square);
const sum = square.reduce((acc,ele) => acc+ele)
console.log(sum/square.length);


const doubleAndReturnArgs = (arr,...args) => [
    ...arr,
    ...args.map(n => n*n)
];

console.log(doubleAndReturnArgs([1,2,3,4],6,7));