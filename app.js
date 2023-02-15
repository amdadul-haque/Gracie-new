const menuBtn = document.getElementById("menuBtn")
const menuContent = document.getElementById("menuContent")
const menuOuter = document.getElementById("menu-outer")
const menuLinks = document.querySelectorAll('.menu-links');
const copyrightYear = document.getElementById('copyright-year');

menuBtn.addEventListener('click', () => {
  menuContent.classList.toggle('hidden');
  menuOuter.classList.toggle('menu-outer-blur');
  menuOuter.classList.remove('hidden');
})

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    menuContent.classList.toggle('hidden')
    menuOuter.classList.add('hidden')
  })
})

// menuBtn.addEventListener('mouseover', () => {
//   menuContent.classList.remove('hidden');
//   menuOuter.classList.remove('hidden')
//   menuOuter.classList.add('menu-outer-blur')
// })

// menuBtn.addEventListener('mouseout', () => {
//   menuContent.classList.toggle('hidden')
//   menuOuter.classList.add('hidden')
// })


// menuContent.addEventListener('mouseout', () => {
//   menuContent.classList.toggle('hidden')
//   menuOuter.classList.add('hidden')
// })

document.getElementById('copyright-year').innerHTML = (new Date).getFullYear();
