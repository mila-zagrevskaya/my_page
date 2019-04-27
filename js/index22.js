
var container = document.querySelector(".result2").appendChild(document.createElement ("p"))

function checkTypeof ( arg ) {
	container.innerText += `${( typeof arg === 'number'  ) ? 
		new Date ().toLocaleString ()  : 
			'  Неверный тип данных   ' }`
}

function exercise2 (event) {	
	checkTypeof (24)
}


function exercise21 (event) {
	checkTypeof ("24")
}