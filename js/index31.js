
function sample () {
    console.log ( arguments.callee, arguments )
}

function exercise1 (event) {
	sample ( 10, false, "google" )
}



