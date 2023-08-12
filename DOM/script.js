

const body = document.querySelector('body')
body.style.width = "70vw"
body.style.margin = "0 auto"

const btn = document.createElement('button');
body.append(btn)

btn.classList.add('btn');
console.log(btn);

// btn.add

btn.addEventListener('click',() => {
    document.querySelector('button').classList.toggle('black');
    document.querySelector('h1').classList.toggle('red')
    document.querySelector('p').classList.toggle('grey')
})
btn.classList.toggle('black');
btn.innerHTML = "<b>submit</b>"
