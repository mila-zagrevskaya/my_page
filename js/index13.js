function exercise3 (event) {
	var container = document.querySelector(".result3").appendChild(document.createElement ("p"))
	var numbers = [ 254, 115, 78, 25, 91, 45, 37 ];
		for (i=0; i<numbers.length; i++) {
			if (numbers[i]>50) {
				container.innerText += `  ${numbers [i]};  `
				console.log (`${numbers [i]}; `)
			}

	    }

}

