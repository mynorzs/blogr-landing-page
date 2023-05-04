document.querySelector('.button-menu').addEventListener('click', function() {
  document.querySelector('.nav-default').classList.toggle('nav-active');
  this.classList.toggle('button-close');
})

document.querySelector(".button-product").addEventListener('click', function() {
  document.querySelector('.dropdown-content-product').classList.toggle('dropdown-content-active');
  this.classList.toggle('button-product-expanded');
})

document.querySelector(".button-company").addEventListener('click', function() {
  document.querySelector('.dropdown-content-company').classList.toggle('dropdown-content-active');
  this.classList.toggle('button-company-expanded');
})

document.querySelector(".button-connect").addEventListener('click', function() {
  document.querySelector('.dropdown-content-connect').classList.toggle('dropdown-content-active');
  this.classList.toggle('button-connect-expanded');
})

