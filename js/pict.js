
// // moved of pictures 
// // resize

var collection = Array.from (document.getElementsByClassName ('screen'))

collection.forEach(
  (element, index) => {
    element.addEventListener('click', function (event) {
      window.innerWidth > 769 ? element.classList.add("big-pict") : null
      // : element.classList.remove("big-pict")
    })
})

// document.querySelector('.wrapper').addEventListener('click', function ( event ) {
//     document.querySelector('.screen').classList.remove("big-pict")
     
// })