const menus = document.querySelector('.header ul');
const menusBtn = document.querySelector('.ri-menu-line');
const closeBtn = document.querySelector('.ri-close-large-line');

menusBtn.addEventListener('click',function(){
  menus.classList.add("display");
})

closeBtn.addEventListener('click',function(){
  menus.classList.remove("display");
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    })
  })
})