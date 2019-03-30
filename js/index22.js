function checkTypeof ( arg ) {
     console.log ( typeof arg === 'number' ? 
     	new Date ().toLocaleString ()  : 
     	'Неверный тип данных' )
}

checkTypeof (24)
checkTypeof ("24")