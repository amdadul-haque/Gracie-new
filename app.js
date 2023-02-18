const headerDiv = document.getElementById('header');
const footerDiv = document.getElementById('footer');

let menuHeight = false;
const currentPos = -300;
let pos = currentPos;
var id = null

const fullHeight = 00;
const speed = 3;

fetch('./header.html')
  .then(response => response.text())
  .then(data => {
    headerDiv.innerHTML = data;
    const menuBtn = document.getElementById("menuBtn")
    const menuContent = document.getElementById("menuContent")
    const menuOuter = document.getElementById("menu-outer")
    const menuLinks = document.querySelectorAll('.menu-links');

    menuBtn.addEventListener('click', () => {
      if (menuHeight) {
        menuHeight = false
        setTimeout(() => {
          menuOuter.classList.toggle('menu-outer-blur');
          menuOuter.classList.remove('hidden');
        }, 100)
        clearInterval(id);
        id = setInterval(() => {
          if (pos <= currentPos) {
            clearInterval(id);
          } else {
            pos -= speed;
            // menuContent.style.height = `${pos}px`
            menuContent.style.transform = `translateY(${pos}px)`
          }
        }, 10)

      }
      else {
        menuOuter.classList.toggle('menu-outer-blur');
        menuOuter.classList.remove('hidden');
        menuHeight = true
        clearInterval(id);
        id = setInterval(() => {
          if (pos >= fullHeight) {
            clearInterval(id);
          } else {
            pos += speed;
            // menuContent.style.height = `${pos}px`
            menuContent.style.transform = `translateY(${pos}px)`
          }
        }, 10)
      }
      console.log(pos)

    })

    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', () => {
        menuOuter.classList.toggle('menu-outer-blur');
        // menuContent.style.height = `${currentPos}px`
        menuContent.style.transform = `translateY(${currentPos}px)`
        pos = currentPos;
        menuHeight = !menuHeight;
      })
    })
  });

fetch('./footer.html')
  .then(response => response.text())
  .then(data => {
    footerDiv.innerHTML = data;
    document.getElementById('copyright-year').innerHTML = (new Date).getFullYear();
  });












