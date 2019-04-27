function exercise (event) {
    var container = document.querySelector(
        ".result2").appendChild(
        document.createElement ("p"))

    function userInfo (user) {
            container.textContent =  
                this.registered == true ? 
            	   `Дата регистрации:  ${this.data} ` :
            	   ` Незарегистрированный пользователь: ${this.name} `
    }

    var firstUser = {
        name: "Vasya",
        registered: true,
        data: new Date(2019,3,15).toLocaleString (),
      	getInfo: userInfo 
    }
    var secondUser = {
        name: "Petya",
        registered: false,
        data: new Date().toLocaleString (),
      	getInfo: userInfo 
    }

        firstUser.getInfo ()
}
           

function exercise2 (event) {
    var container = document.querySelector(
        ".result2").appendChild(
        document.createElement ("p"))

    function userInfo (user) {
            container.textContent =  
                this.registered == true ? 
                   `Дата регистрации:  ${this.data} ` :
                   ` Незарегистрированный пользователь: ${this.name} `
    }

    var secondUser = {
        name: "Petya",
        registered: false,
        data: new Date().toLocaleString (),
        getInfo: userInfo 
    }

        secondUser.getInfo ()
}