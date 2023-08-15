//@ts-check

function makePizza(top='hi'){

    let pizza = new Promise((res,rej) => {
        if(top.includes('hi')){
            rej('🤏'+top)
        }
        res('🍕');
    })

    return pizza;
}


function wait(ms=0){
    return new Promise((res,rej) => {
        setTimeout(res,ms);
    })
}

async function go(){
    console.log('Starting');
    await wait(2000);
    console.log('Ending');
}

go();

const d =makePizza();
console.log(d);
