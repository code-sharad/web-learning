


let btn = document.querySelector('#btn')

btn.addEventListener('click',() => {
    const rand1 = Math.floor(Math.random() * 255) + 1;
    const rand2 = Math.floor(Math.random() * 255) + 1;
    const rand3 = Math.floor(Math.random() * 255) + 1;

    const cont = document.querySelector('.container');
    const title = document.querySelector('.title');
    cont.style.backgroundColor=`rgb(${rand1},${rand2},${rand3})`;
    title.style.color=`rgb(${rand1},${rand2},${rand3})`;
    console.log(`rgb(${rand1},${rand2},${rand3}`);
    
})
