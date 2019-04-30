function exercise () {
  var bag = {
    content: [ 
    "паспорт",
    "водительское удостоверение",
    "телефон",
    "ключи", 
    "кошелек",
    "помада" 
    ],
    addInBag: function ( name ) {
       this.content.push ( name )
    } ,
    deleteFromBag: function ( num ) {
       this.content.splice ( num, 1 )
    } 
  }
}



  var bag = {
    content: [ 
    " паспорт",
    " водительское удостоверение",
    " телефон",
    " ключи", 
    " кошелек",
    " помада" 
    ],
    addInBag: function ( name ) {
       this.content.push ( name )
    } ,
    deleteFromBag: function ( num ) {
       this.content.splice ( num, 1 )
    } 
  }

var container = document.querySelector(
    ".result1").appendChild(
        document.createElement ("p"))

function exercise11 (event) {
  console.log (bag.content)
  container.textContent =  bag.content
}
function exercise12 (event) {
  bag.deleteFromBag ( 1 )
    console.log ( bag.content )
    container.textContent =  bag.content
}  
function exercise13 (event) {
  bag.addInBag ( " парфюм" )
    console.log ( bag.content )
    container.textContent =  bag.content
}
function exercise14 (event) {
  bag.addInBag ( " кредитная карта" )
    console.log ( bag.content )
    container.textContent =  bag.content
}
function exercise15 (event) {
  bag.deleteFromBag ( 1 )
     console.log ( bag.content )
     container.textContent =  bag.content
}

