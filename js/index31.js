function sample () {
    console.log ( arguments.callee, arguments )
}
sample ( 10, false, "google" )