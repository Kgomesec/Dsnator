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

//  Pica-pau
//  Bob Esponja
//  Robin
//  Cyborg
//  mickey
//  Homer Simpson
//  Popeye
//  Lula Molusco
//  Mordecai
//  bumblebee
// 	pluto
// 	

