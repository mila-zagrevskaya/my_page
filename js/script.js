// вывод кода в блок на страницу

function loadData(url){
	return new Promise(
		function(resolve,reject){
			const request = new XMLHttpRequest()
			request.open('GET',url)

			request.onreadystatechange = function(event){
				event.target.readyState === 4 ? 
					event.target.status === 200 ? 													resolve(event.target.responseText) :
	 					reject(event.target.statusText) : null  
			}
			request.send()
		}
	)
}


loadData('script.js').then(
	response => document.document.querySelector(".show-code").appendChild(
		document.createElement('pre')).innerText = response	
	)

