

const par = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p = document.createElement('p');

const body = document.querySelector('body');




par.innerText = "Hey I'm red";
h3.innerText = "I'm a blue h3";
h1.innerText = "I'm in a div";
p.innerText = "ME TOO!";
div.append(h1);
div.append(p);


h3.style.color = 'blue';
par.style.color = 'red';
div.style.border= "2px solid black";
div.style.backgroundColor = 'pink';

body.append(par,h3,div);

