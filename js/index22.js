function exercise2 (event) {
	var container = document.querySelector(".result2").appendChild(document.createElement ("p"))


	function checkTypeof ( arg ) {
		container.innerText += `${(typeof arg === 'number') ? 
		new Date ().toLocaleString ()  : 
		' Неверный тип данных ' }`
	}

	checkTypeof (24)

}


function exercise21 (event) {

	var container = document.querySelector(".result2").appendChild(document.createElement ("p"))

	function checkTypeof ( arg ) {
		container.innerText += `${(typeof arg === 'number') ? 
		new Date ().toLocaleString ()  : 
		' Неверный тип данных ' }`
	}

	checkTypeof ("24")
}