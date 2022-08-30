const drop = document.querySelector('.drop');
const volvo = document.querySelector('.volvo');
const pic = document.querySelector('.pics');
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancel = document.querySelector(".cancel-btn");
const login = document.querySelector('.login');
const cart = document.querySelector('.cartbut');
// console.log(pic);
function searching(to){
    //since list item is collection we have to convert it to array to apply filter
    
    Array.from(pic.children)
    .filter((i)=>{
        console.log(!(i.classList.contains(to)))
        return !(i.classList.contains(to));
    })
    .forEach(i=>{
            i.classList.add('disp');
        
    });
    // console.log(s1);
    Array.from(pic.children)
    .filter((i) =>{
        return i.classList.contains(to);//we are getting list items that does match with value typed in search box
    })
    .forEach(i =>{
        i.classList.remove('disp');//then we are making it visible
    });

    // .filter((i) =>{
    //     //console.log(!i.textContent.toLowerCase().includes(to));
    //     return !i.textContent.toLowerCase().includes(to);//we are getting list items that does not  match with value typed in search box
    // });
    // s1.forEach(i =>{
    //     i.classList.add('filtered');//then we are making it hide
    // });
    //if we delete we want to remove class filtered
    //below is chained array example
    // Array.from(list.children)
    // .filter((i) =>{
    //     return i.textContent.toLowerCase().includes(to);//we are getting list items that does match with value typed in search box
    // })
    // .forEach(i =>{
    //     i.classList.remove('filtered');//then we are making it visible
    // });
}
drop.addEventListener('click', (e)=>{
    const car = e.target.value;
    console.log(car);
    searching(car);
});


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