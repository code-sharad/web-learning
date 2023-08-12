
const student = [
    {
        name:"sharad",
        marks:99
    },
    {
        name:"nikhil",
        marks:90
    },
    {
        name:"sanket",
        marks:98
    }
]

const dd = student.map((el) =>(el.marks))

const num = [342,1,2,3,4,23,5,6,7,8,9,10]

const even = num.filter((el) => (el%2 == 0))
const odd = num.filter((el) => (el%2 !== 0))


const finalVal = num.reduce((res,el) => res+el)

const max = num.reduce((max,el) => {
    if(max < el) {
        return el;
    }else{
        return max;
    }
})

const isMulOF10 = [10,200,400,20].every((el) => el%10 == 0);

const minNum = [34,54,2,
    3,56,3,8,4].reduce((min,el) => {
    if(min > el){
        return el;
    }else{
        return min;
    }
})


// const a = 10;

// let m = 0;
// let n = 1;
// for(let i =0;i<10;i++){
//     sum = m+n;
//     console.log(sum);
//     m = n;
//     n = sum;
// }

function sum(...args){
    return args.reduce((sum,el) => sum+el);
}

console.log