let hamburger = document.querySelector('.hamburger-open')
let menuClose = false

hamburger.addEventListener('click', () => {
    if (!menuClose) {
        hamburger.className = 'hamburger-close'
        menuClose = true
    } else{
        hamburger.className = 'hamburger-open'
        menuClose = false
    }

})