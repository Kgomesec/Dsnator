function jogar() {
    window.location.href = "principal"
}


document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                var perguntas = data.perguntas;
                var indicePerguntaAtual = 0;

                function exibirProximaPergunta() {
                    // Adicionando o número da pergunta na div com classe 'numQuest'
                    var divNumero = document.querySelector('.numQuest');
                    divNumero.innerHTML = perguntas[indicePerguntaAtual].numero;

                    // Adicionando a pergunta na div com classe 'lugPergunta'
                    var divPergunta = document.getElementById('lugPergunta');
                    divPergunta.innerHTML = perguntas[indicePerguntaAtual].pergunta;
                }

                exibirProximaPergunta();

                // Adicionando evento de clique aos botões
                var botoesResposta = document.querySelectorAll('.btnResposta');
                botoesResposta.forEach(function(botao) {
                    botao.addEventListener('click', function() {
                        // Atualiza o índice da pergunta
                        indicePerguntaAtual++;

                        // Verifica se há mais perguntas
                        if (indicePerguntaAtual < perguntas.length) {
                            exibirProximaPergunta();
                        } else {
                            var divNumero = document.querySelector('.numQuest');
                            divNumero.innerHTML = '';
                            var divPergunta = document.getElementById('lugPergunta');
                            divPergunta.innerHTML = "Fim das perguntas";
                        }
                    });
                });
            }
        }
    };
    xhr.open('GET', '/get_perguntas', true);
    xhr.send();
});


var  quantQuest = 1
var i = 0
function trocarNumQuest(){

	var lugQuest = document.getElementById('numQuest')
	lugQuest.innerHTML=quantQuest
}
trocarNumQuest()
function trocarQuest() {
	
}

function responder(num){
	var btn = document.getElementById(num).value
	console.log(btn)
	quantQuest+=1
	trocarNumQuest()
	if(i < 2) {
		i+=1
	}
	else {
		i=0
	}
	trocarQuest()
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