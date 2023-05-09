// Array com os personagens constante
const personagens = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Doutora Brinquedos", "Edna Moda", 
                    "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Johnny Bravo", 
                    "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", 
                    "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"];
const pic = ["img/Buzz.png", "img/Dexter.png", "img/Dick.png", "img/Doutora.png", "img/Edna.png"
            , "img/Eustacio.png", "img/Fred.png", "img/Girafales.png", "img/Guido.png", "img/Johnny.png"
            , "img/Linguini.png", "img/Lula.png", "img/Mario.png", "img/Popeye.png", "img/Earl.png"
            , "img/Prefeito.png", "img/Sherlock.png", "img/Vicky.png", "img/Woody.png", "img/Homer.png"];
for (var i = 0; i < pic.length; i++) { //Mostra imagens dos personagens
    var img = document.createElement("img");
    img.src = pic[i];
    document.getElementById("imageContainer").appendChild(img);
}

// Seleciona personagem aleatório da lista ao apertar o botão
  
const indiceAleatorio = Math.floor(Math.random() * personagens.length);
const personagemAleatorio = personagens[indiceAleatorio];
document.getElementById("personagem").innerHTML = personagemAleatorio;


var exibiuSim = false;
var exibiuNao = false;

// Array com as perguntas
var perguntasTela = [ "Seu personagem está usando óculos?", "Seu personagem está usando chapéu?", "Seu personagem tem bigode?", "Seu personagem é masculino?", "Seu personagem é careca?", "Seu personagem é loiro?", "Seu personagem tem cabelo marrom?", "Seu personagem tem cabelo preto?", "Seu personagem é humano?"];
var perguntasIA = [ "Seu personagem está usando óculos?", "Seu personagem está usando chapéu?", "Seu personagem tem bigode?", "Seu personagem é masculino?", "Seu personagem é careca?", "Seu personagem é loiro?", "Seu personagem tem cabelo marrom?", "Seu personagem tem cabelo preto?", "Seu personagem é humano?" ];
var removerPersonagensJogador = [ "Buzz Lightear", "Dexter", "Dick Vigarista", "Doutora Brinquedos", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Johnny Bravo", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson" ];
var removerPersonagensIA = [ "Buzz Lightear", "Dexter", "Dick Vigarista", "Doutora Brinquedos", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Johnny Bravo", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson" ];

// Índice da pergunta atual
var indice = 0;

document.getElementById("removerPersonagensJogador").innerHTML = removerPersonagensJogador;
document.getElementById("removerPersonagensIA").innerHTML = removerPersonagensIA;

// Função para exibir a pergunta atual no HTML
function exibirPergunta() {
  document.getElementById("pergunta").innerHTML = perguntasTela[indice];
}

// Função para avançar para a próxima pergunta
function proximaPergunta() {
    indice++;
    if (indice >= perguntasTela.length) {
      indice = 0; // Reinicia a lista de perguntas se chegar ao fim
    }
    exibirPergunta();
}


function perguntaRobo(){

    // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!
    const respostaIA = window.confirm(perguntasIA[indice++]); 

    // Verificar a resposta do usuário
    if (respostaIA) {
        // O usuário respondeu "Sim"
        var itensARemover = ["Buzz Lightear"];
        removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
            return !itensARemover.includes(lista);   
        });
        } else {
        // O usuário  respondeu "Não"
        var itensARemover = ["Woody"];
        removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
            return !itensARemover.includes(lista);             
        });        
        }

}


function perguntarApagar(){

    function exibirSim() {
        if (!exibiuSim) {
          window.alert("Sim!");
          exibiuSim = true;
        }
    }
      
      // Função para exibir a mensagem de "Não"
      function exibirNao() {
        if (!exibiuNao) {
          window.alert("Não!");
          exibiuNao = true;
        }
    }

    switch (indice){

        case 0: //  "Seu personagem está usando óculos?"
            var exibiuSim = false;
            var exibiuNao = false;
            const personagensOculos = ["Edna Moda", "Dexter","Eustácio", "Johnny Bravo"];
            if (personagensOculos.includes(personagemAleatorio)){
                var itensARemover = ["Buzz Lightear", "Dick Vigarista", "Doutora Brinquedos", "Fred Flinstone", "Girafales", "Guido", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"]
                removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                    exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                    return !itensARemover.includes(lista);   
                });
            } else {
                var itensARemover = ["Edna Moda", "Dexter", "Eustácio", "Johnny Bravo"]
                removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                    exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                    return !itensARemover.includes(lista);             
                });
            }
            perguntaRobo();
        break

        case 1: // "Seu personagem está usando chapéu?"
        var exibiuSim = false;
        var exibiuNao = false;
        const personagensChapeu = ["Dick Vigarista", "Eustácio", "Girafales", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Woody"]
        if (personagensChapeu.includes(personagemAleatorio)){
            var itensARemover = ["Buzz Lightear", "Dexter", "Doutora Brinquedos", "Edna Moda", "Fred Flinstone", "Guido", "Johnny Bravo", "Sherlock Holmes", "Vicky", "Homer Simpson"]
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Dick Vigarista", "Eustácio", "Girafales", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Woody"]
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                return !itensARemover.includes(lista);             
            });
        }
        break 
    
        case 2:// "Seu personagem tem bigode?"
        var exibiuSim = false;
        var exibiuNao = false;
        const personagensBigode = ["Dick Vigarista", "Girafales", "Mario", "Earl", "Prefeito"]
        if (personagensBigode.includes(personagemAleatorio)){
            var itensARemover = ["Buzz Lightear", "Dexter", "Doutora Brinquedos", "Edna Moda", "Eustácio", "Fred Flinstone", "Guido", "Johnny Bravo", "Linguini", "Lula Molusco", "Popeye", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Dick Vigarista", "Girafales", "Mario", "Earl", "Prefeito"]
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                return !itensARemover.includes(lista);             
            });
        }
        break

        case 3: //  "Seu personagem é masculino?"
        var exibiuSim = false;
        var exibiuNao = false;
        const personagensMasculino = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Johnny Bravo", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Woody", "Homer Simpson"];
        if (personagensMasculino.includes(personagemAleatorio)){
            var itensARemover = ["Doutora Brinquedos", "Edna Moda", "Vicky"]
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Johnny Bravo", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Woody", "Homer Simpson"];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                return !itensARemover.includes(lista);             
            });
        }   
        break

        case 4://  "Seu personagem é careca?"
        var exibiuSim = false;
        var exibiuNao = false;
        const personagensCareca = ["Buzz Lightear","Eustácio","Guido","Lula Molusco","Popeye","Earl", "Prefeito","Homer Simpson"];
        if (personagensCareca.includes(personagemAleatorio)){
            var itensARemover = ["Dexter", "Dick Vigarista","Doutora Brinquedos", "Edna Moda","Fred Flinstone", "Girafales","Johnny Bravo", "Linguini", "Mario","Sherlock Holmes", "Vicky", "Woody"]
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
        } else {
            var itensARemover = ["Buzz Lightear","Eustácio","Guido","Lula Molusco","Popeye","Earl", "Prefeito","Homer Simpson"];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                return !itensARemover.includes(lista);             
            });
        }      
        break   

        case 5: //  "Seu personagem tem cabelos loiros?" 
        var exibiuSim = false;
        var exibiuNao = false;
        const personagensLoiro = ["Johnny Bravo"];
        if (personagensLoiro.includes(personagemAleatorio)){
            var itensARemover = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Doutora Brinquedos", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"]
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Johnny Bravo"];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                return !itensARemover.includes(lista);             
            });
        }     
        break 

        case 6: // "Seu personagem tem cabelos castanhos?"
        var exibiuSim = false;
        var exibiuNao = false;
        const personagensCastanho = ["Doutora Brinquedos", "Mario", "Sherlock Holmes", "Woody"];
        if (personagensCastanho.includes(personagemAleatorio)){
            var itensARemover = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Lula Molusco", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Johnny Bravo","Popeye", "Earl", "Prefeito", "Vicky", "Homer Simpson"];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Doutora Brinquedos", "Mario", "Sherlock Holmes", "Woody"];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                return !itensARemover.includes(lista);             
            });
        }     
        break 

        case 7: // "Seu personagem tem cabelos pretos?"
        var exibiuSim = false;
        var exibiuNao = false;
        const personagensPreto = ["Dick Vigarista","Edna Moda", "Fred Flinstone", "Girafales","Earl"];
        if (personagensPreto.includes(personagemAleatorio)){
            var itensARemover = ["Buzz Lightear", "Dexter", "Doutora Brinquedos","Eustácio", "Guido", "Johnny Bravo", "Linguini", "Lula Molusco", "Mario", "Popeye", "Prefeito", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Dick Vigarista","Edna Moda", "Fred Flinstone", "Girafales","Earl"];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                return !itensARemover.includes(lista);             
            });
        }     
        break

        case 8: //  "Seu personagem é humano?"
        var exibiuSim = false;
        var exibiuNao = false;
        const personagensHumanos = ["Dexter", "Dick Vigarista", "Doutora Brinquedos", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Johnny Bravo", "Linguini", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Vicky", "Homer Simpson" ];
        if (personagensHumanos.includes(personagemAleatorio)){
            var itensARemover = ["Buzz Lightear", "Guido", "Lula Molusco", "Woody"];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Dexter", "Dick Vigarista", "Doutora Brinquedos", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Johnny Bravo", "Linguini", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Vicky", "Homer Simpson" ];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                return !itensARemover.includes(lista);             
            });
        }
        break
    }

    document.getElementById("imageContainer").appendChild(img);
    document.getElementById("removerPersonagensJogador").innerHTML = removerPersonagensJogador;
    document.getElementById("removerPersonagensIA").innerHTML = removerPersonagensIA;

    if (removerPersonagensJogador.length === 1) {
        const personagemRestante = removerPersonagensJogador.pop();
        window.alert(`Parabéns! Você adivinhou! O personagem que escolhi foi ${personagemRestante}.`);
    }

    if (removerPersonagensIA.length === 1) {
    const personagemRestanteIA = removerPersonagensIA.pop();
    window.alert(`Já sei! Seu personagem é ${personagemRestanteIA}.`);
    }

    else{
        return null
    }  

}

exibirPergunta(); // Exibe a primeira pergunta // Lista de perguntas ++ 
