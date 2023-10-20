function jogar() {
	window.location.href = "principal.html"
}
var  quantQuest = 1
function trocarNumQuest(){

	var lugQuest = document.getElementById('numQuest')
	lugQuest.innerHTML=quantQuest
}
trocarNumQuest()
function responder(num){
	var btn = document.getElementById(num).value
	console.log(btn)
	quantQuest+=1
	trocarNumQuest()
}

//  ANIMAL {
	// TERRESTRE {
		// 	pluto
		//  mickey
		
		//  Pica-pau
		//  Mordecai
	//  }
	//AQUATICO {
		//  Lula Molusco
		//  Bob Esponja
	//  }

//  HUMANO {	
	//  Robin
	//  Homer Simpson
	//  Popeye
//  }

//  ROBO {
	//  Cyborg
	//  bumblebee
	// 	BMO

//  }