const burgerBtn= document.querySelector('.menu__icon')
const burger= document.querySelector('.menu__list')




if(burgerBtn && burger){
    burgerBtn.addEventListener('click',()=>{
        burgerBtn.classList.toggle('active')
        burger.classList.toggle('active')
    })
}