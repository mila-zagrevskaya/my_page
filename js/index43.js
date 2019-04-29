	
	function Constr ( age, hobby ){
	  this.age = age || 24
	  this.hobby = hobby || "painting"
	}
	var human = new Constr (25)
	var human2 = new Constr (18, "football")
	console.log (human)
	console.log (human2)

	Constr.prototype.addProperty = function( propNname, value){
	    this[propNname] = value
	  }

	human.addProperty ("name", "Masha")
	console.log (human)

	human2.addProperty ("rest", "sea")
	console.log (human2)

	console.log (human.name)
	console.log (human2.rest)