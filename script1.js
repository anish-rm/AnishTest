const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancel = document.querySelector(".cancel-btn");
const login = document.querySelector('.login')
const cart = document.querySelector('.cartbut')
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    login.classList.add("hide");
    cart.classList.add("hide");
}
cancel.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    login.classList.remove("hide");
    cart.classList.remove("hide");
}