function userInfo (user) {
        console.log ( this.registered == true ? 
        	`Дата регистрации: ${this.data}` :
        	`Незарегистрированный пользователь: ${this.name}` )
}

var firstUser = {
    name: "Vasya",
    registered: true,
    data: new Date(1991,3,15).toLocaleString (),
  	getInfo: userInfo 
}
var secondUser = {
    name: "Petya",
    registered: false,
    data: new Date().toLocaleString (),
  	getInfo: userInfo 
}

firstUser.getInfo ()
secondUser.getInfo ()