
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



// ________

// show code

 function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
