/*
// moved of pictures 
// resize

let collection = Array.from (document.getElementsByClassName ('screen'))

collection.forEach (
  function (elem) {
    elem.onclick = function (event) {
      this.style.width = "1200px";
    }
  }
)
collection.forEach (
  function (elem) {
    elem.onmouseout = function (event) {
      this.style.width = "700px";
    }
  }
)
*/


// ___________
// mobile-menu

document.querySelector('.sidebar_top').addEventListener('click', function ( event ) {
    window.innerWidth < 769 ? document.querySelector('.panel').style =
        `
        display: block;
        ` : null
})
document.querySelector('.banner').addEventListener('click', function ( event ) {
    window.innerWidth < 769 ? document.querySelector('.panel').style.display = 'none' : null
})

// _________

// show / hide arrow
window.onscroll = function(event) {showArrow()};

function showArrow() {
  (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600 ) ?
      document.getElementById("anchor").classList.add("show") : 
         document.getElementById("anchor").classList.remove("show")
}

// ________