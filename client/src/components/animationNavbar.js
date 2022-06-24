const menu = document.querySelection('.menu');
const rubriques = document.querySelector('.rubriques');

let touchStart, touchEnd;

//click
menu.addEvenListener('click', () => {
    rubriques.classList.add('open')
})

//touchStart
rubriques.addEventListener('touchstart', e => {
 touchStart = e.targetTouches[0].clientX;
})

//touchMove

rubriques.addEventListener('touchmove', e => {
    touchEnd = e.targetTouches[0].clientX
})

// Distance
rubriques.addEventListener('touchend', e => {
 if ( touchStart - touchEnd > 100) {
    rubriques.classList.remove('open')
 }
})