/*
// moved of pictures 
// resize

let collection = Array.from (document.getElementsByClassName ('scheme'))

collection.forEach (
  function (elem) {
    elem.onclick = function (event) {
      this.style.width = "900px";
    }
  }
)
collection.forEach (
  function (elem) {
    elem.onmouseout = function (event) {
      this.style.width = "600px";
    }
  }
)
*/
// ______
// open link
// let btn = document.getElementsByClassName ("btn")
// btn.onclick = function (event) {
//   var textBlock = document.createElement("div")
//   document.body.appendChild(textBlock)
//   // textBlock.className = "menu"
// }

// mobile-menu
// document.querySelector('.nav-menu').addEventListenner('click', function (event) {
//     window.innerWidth < 768 ? 
//       document.querySelector ('.categories .nav').style = `
//         display: none;
//         ` : null
// })

// document.querySelector ('.banner').addEventListenner('click', 
//   function (event) {
//     window.innerWidth < 768 ? 
//       document.querySelector ('.categories .nav').style = `
//         display: block;
//         ` : null
// })


document.querySelector('.sidebar_top').addEventListener('click', function ( event ) {
    window.innerWidth < 769 ? document.querySelector('.panel').style =
        `
        display: block;
        ` : null
})
document.querySelector('.banner').addEventListener('click', function ( event ) {
    window.innerWidth < 769 ? document.querySelector('.panel').style.display = 'none' : null
})
