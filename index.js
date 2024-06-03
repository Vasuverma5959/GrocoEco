var searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active')
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
var shopingCart =document.querySelector('.shoping-cart');

document.querySelector('#cart-btn').onclick =()=>{
    shopingCart.classList.toggle('active')
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
var loginForm =document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =()=>{
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    navbar.classList.remove('active');
}
var navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

