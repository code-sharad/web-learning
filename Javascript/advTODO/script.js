

let input = document.querySelector('input');
let ul = document.querySelector('ul');
let li = document.querySelector('li');
let button = document.querySelectorAll('button');
let todo;

input.addEventListener('change', function(event){
    // console.log(event.target.value);
    todo = event.target.value;

    let newli = document.createElement('li');
    let newbutton = document.createElement('button');

    newli.innerText = todo;
    newbutton.innerText = 'delete';

    ul.append(newli);
    newli.append(newbutton);
    
})


ul.addEventListener('click',function(event){

    if(event.target.nodeName == 'BUTTON'){
        let item = event.target.parentElement
        item.remove();
    }
})

