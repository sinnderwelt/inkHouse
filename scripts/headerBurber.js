let btn = document.querySelector('.headerMenuListClick');
let burger = document.querySelector('.burger');
let svg = document.querySelector('#headerMenuListCart');

let burgerCenter = document.querySelector('#burgerCenter');
let burgerTop = document.querySelector('#burgerTop');
let burgerBottom = document.querySelector('#burgerBottom');

console.log(burgerTop);
console.log(burgerBottom);

btn.addEventListener('click', function() {

    if(burger.classList.contains('active')) { 
        burger.classList.remove('active');
        svg.classList.remove('active');

        burgerCenter.classList.remove('activeCenter');
        burgerTop.classList.remove('activeTop');
        burgerBottom.classList.remove('activeBottom');
    } else {
        burger.classList.add('active');
        svg.classList.add('active');
        
        burgerCenter.classList.add('activeCenter');
        burgerTop.classList.add('activeTop');
        burgerBottom.classList.add('activeBottom');
    }
});
