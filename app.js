const menuBtn = document.getElementById("menuBtn")
const menuContent = document.getElementById("menuContent")
const menuOuter = document.getElementById("menu-outer")
const menuLinks = document.querySelectorAll('.menu-links');
const copyrightYear = document.getElementById('copyright-year');
const click = document.getElementById('click')

let menuHeight = false;
const currentPos = -350;
let pos = currentPos;
var id = null
menuBtn.addEventListener('click', () => {
  menuOuter.classList.toggle('menu-outer-blur');
  menuOuter.classList.remove('hidden');
  if (menuHeight) {
    menuHeight = false
    clearInterval(id);
    id = setInterval(() => {
      if (pos <= currentPos) {
        clearInterval(id);
      } else {
        pos -= 3;
        menuContent.style.transform = `translateY(${pos}px)`
      }
    }, 10)
  }
  else {
    menuHeight = true
    clearInterval(id);
    id = setInterval(() => {
      if (pos >= 0) {
        clearInterval(id);
      } else {
        pos += 3;
        menuContent.style.transform = `translateY(${pos}px)`
      }
    }, 10)
  }
  console.log(pos)

})

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    menuOuter.classList.toggle('menu-outer-blur');
    menuContent.style.transform = `translateY(${currentPos}px)`
    pos = currentPos;
    menuHeight = !menuHeight;
  })
})

document.getElementById('copyright-year').innerHTML = (new Date).getFullYear();



