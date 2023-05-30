// Array com os personagens constante
const personagens = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Doutora Brinquedos", "Edna Moda", 
                    "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Johnny Bravo", 
                    "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", 
                    "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"];
const pic = ["img/Buzz.png", "img/Dexter.png", "img/Dick.png", "img/Doutora.png", "img/Edna.png"
, "img/Eustacio.png", "img/Fred.png", "img/Girafales.png", "img/Guido.png", "img/Johnny.png"
, "img/Linguini.png", "img/Lula.png", "img/Mario.png", "img/Popeye.png", "img/Earl.png"
, "img/Prefeito.png", "img/Sherlock.png", "img/Vicky.png", "img/Woody.png", "img/Homer.png"];
const perguntas = [ "Seu personagem está usando óculos?", "Seu personagem está usando chapéu?", 
                "Seu personagem tem bigode?", "Seu personagem é masculino?", "Seu personagem é careca?", 
                "Seu personagem é loiro?", "Seu personagem tem cabelo marrom?", 
                "Seu personagem tem cabelo preto?", "Seu personagem é humano?"
];            

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

// Índice da pergunta atual jogador
var indice = 0;

// Seleciona pergunta aleatoriamente a primeira pergunta do robô
var indiceRobo = Math.floor(Math.random() * perguntas.length);

document.getElementById("removerPersonagensJogador").innerHTML = removerPersonagensJogador;
document.getElementById("removerPersonagensIA").innerHTML = removerPersonagensIA;
document.getElementById("indiceRobo").innerHTML = indiceRobo;

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

    function proximaPerguntaRobo(){
        indiceRobo++;
        if (indiceRobo >= perguntasIA.length) {
            indiceRobo = 0; // Reinicia a lista de perguntas se chegar ao fim
        }
        document.getElementById("indiceRobo").innerHTML = indiceRobo;
    }

    // Verificar a resposta do usuário
    switch (indiceRobo){

        case 0: //  "Seu personagem está usando óculos?"
            // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
            var respostaIA = Swal.fire({
                title: 'Tenho uma pergunta',
                text: perguntasIA[indiceRobo],
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'
              }).then((result) => {
                if (result.isConfirmed) {
                // O usuário respondeu "Sim"
                    var itensARemover = ["Buzz Lightear", "Dick Vigarista", "Doutora Brinquedos", "Fred Flinstone", "Girafales", "Guido", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"]
                    removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                        return !itensARemover.includes(lista);   
                });
            } else {
                // O usuário  respondeu "Não"
                var itensARemover = ["Edna Moda", "Dexter", "Eustácio", "Johnny Bravo"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);             
                })
            }
        })
        proximaPerguntaRobo()
        break

        case 1: // "Seu personagem está usando chapéu?"
        // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
        var respostaIA = Swal.fire({
            title: 'Tenho uma pergunta',
            text: perguntasIA[indiceRobo],
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
          }).then((result) => {
            if (result.isConfirmed) {
        // O usuário respondeu "Sim"
                var itensARemover = ["Buzz Lightear", "Dexter", "Doutora Brinquedos", "Edna Moda", "Fred Flinstone", "Guido", "Johnny Bravo", "Sherlock Holmes", "Vicky", "Homer Simpson"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);
        });
        } else {
        // O usuário  respondeu "Não"
            var itensARemover = ["Dick Vigarista", "Eustácio", "Girafales", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Woody"];
            removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                return !itensARemover.includes(lista);             
        });        
        }
        })
        proximaPerguntaRobo()
        break

        case 2: // "Seu personagem tem bigode?"
        // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
        var respostaIA = Swal.fire({
            title: 'Tenho uma pergunta',
            text: perguntasIA[indiceRobo],
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
          }).then((result) => {
            if (result.isConfirmed) {
        // O usuário respondeu "Sim"
                var itensARemover = ["Buzz Lightear", "Dexter", "Doutora Brinquedos", "Edna Moda", "Eustácio", "Fred Flinstone", "Guido", "Johnny Bravo", "Linguini", "Lula Molusco", "Popeye", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);   
        });
        } else {
        // O usuário  respondeu "Não"
            var itensARemover = ["Dick Vigarista", "Girafales", "Mario", "Earl", "Prefeito"];
            removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                return !itensARemover.includes(lista);             
        });        
        }
        })

        proximaPerguntaRobo()
        break

        case 3: // "Seu personagem é masculino?"
        // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
        var respostaIA = Swal.fire({
            title: 'Tenho uma pergunta',
            text: perguntasIA[indiceRobo],
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
          }).then((result) => {
        if (result.isConfirmed) {
        // O usuário respondeu "Sim"
            var itensARemover = ["Doutora Brinquedos", "Edna Moda", "Vicky"];
            removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                return !itensARemover.includes(lista);   
        });
        } else {
        // O usuário  respondeu "Não"
            var itensARemover = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Johnny Bravo", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Woody", "Homer Simpson"];;
            removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                return !itensARemover.includes(lista);             
        });        
        }
        })
        proximaPerguntaRobo()
        break
        
        case 4: // "Seu personagem é careca?"
        // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
        var respostaIA = Swal.fire({
            title: 'Tenho uma pergunta',
            text: perguntasIA[indiceRobo],
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
          }).then((result) => {
            if (result.isConfirmed) {
        // O usuário respondeu "Sim"
                var itensARemover = ["Dexter", "Dick Vigarista","Doutora Brinquedos", "Edna Moda","Fred Flinstone", "Girafales","Johnny Bravo", "Linguini", "Mario","Sherlock Holmes", "Vicky", "Woody"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);   
            });
            } else {
            // O usuário  respondeu "Não"
                var itensARemover = ["Buzz Lightear","Eustácio","Guido","Lula Molusco","Popeye","Earl", "Prefeito","Homer Simpson"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);             
            });        
            }
            })
            proximaPerguntaRobo()
            break
        
        
        case 5: //  "Seu personagem tem cabelos loiros?" 
        // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
        var respostaIA = Swal.fire({
            title: 'Tenho uma pergunta',
            text: perguntasIA[indiceRobo],
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
        // O usuário respondeu "Sim"
                var itensARemover = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Doutora Brinquedos", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"]
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);   
            });
            } else {
            // O usuário  respondeu "Não"
                var itensARemover = ["Johnny Bravo"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);             
            });        
            }
            })
            proximaPerguntaRobo()
            break
        
        
        case 6: //  "Seu personagem tem cabelos castanhos?"
        // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
        var respostaIA = Swal.fire({
            title: 'Tenho uma pergunta',
            text: perguntasIA[indiceRobo],
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
        // O usuário respondeu "Sim"
                var itensARemover = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Lula Molusco", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Linguini", "Johnny Bravo","Popeye", "Earl", "Prefeito", "Vicky", "Homer Simpson"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);   
            });
            } else {
            // O usuário  respondeu "Não"
                var itensARemover = ["Doutora Brinquedos", "Mario", "Sherlock Holmes", "Woody"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);             
            });        
            }
        })
            proximaPerguntaRobo()
            break
        
        case 7: //  "Seu personagem tem cabelos pretos?"
        // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
        var respostaIA = Swal.fire({
            title: 'Tenho uma pergunta',
            text: perguntasIA[indiceRobo],
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
        // O usuário respondeu "Sim"
                var itensARemover = ["Buzz Lightear", "Dexter", "Doutora Brinquedos","Eustácio", "Guido", "Johnny Bravo", "Linguini", "Lula Molusco", "Mario", "Popeye", "Prefeito", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);   
            });
            } else {
            // O usuário  respondeu "Não"
                var itensARemover = ["Dick Vigarista","Edna Moda", "Fred Flinstone", "Girafales","Earl"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);             
            });        
            }
            })
            proximaPerguntaRobo()
            break        

        case 8: //  "Seu personagem é humano?"
        // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
        var respostaIA = Swal.fire({
            title: 'Tenho uma pergunta',
            text: perguntasIA[indiceRobo],
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed){
        // O usuário respondeu "Sim"
                var itensARemover = ["Buzz Lightear", "Guido", "Lula Molusco", "Woody"];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);   
            });
            } else {
            // O usuário  respondeu "Não"
                var itensARemover = ["Dexter", "Dick Vigarista", "Doutora Brinquedos", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Johnny Bravo", "Linguini", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Vicky", "Homer Simpson" ];
                removerPersonagensIA = removerPersonagensIA.filter(function(lista) {
                    return !itensARemover.includes(lista);             
            });        
            }
        })
            proximaPerguntaRobo()
            break       
        }

    document.getElementById("removerPersonagensJogador").innerHTML = removerPersonagensJogador;
    document.getElementById("removerPersonagensIA").innerHTML = removerPersonagensIA;


    if (removerPersonagensIA.length === 1) {
        const personagemRestanteIA = removerPersonagensIA.pop();
        var indicePersonagemRestanteIA = personagens.indexOf(personagemRestanteIA)
        Swal.fire({
            title: 'Já sei!',
            text: 'Seu personagem é: '+personagemRestanteIA,
            imageUrl: pic[indicePersonagemRestanteIA],
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showCancelButton: true,
            confirmButtonText: 'Tentar Novamente!',
            cancelButtonText: 'Sair!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
                window.location.href = "index.html"
            }
          })
        }
    
    else{
        return null
    }  

}


function perguntarApagar(){

    function exibirSim() {
        if (!exibiuSim) {
            const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
            })
            
            swalWithBootstrapButtons.fire({
            title: 'A resposta para sua pergunta é:',
            text: "Sim",
            icon: 'sucess',
            showCancelButton: true,
            confirmButtonText: 'Fechar',
            cancelButtonText: 'Ok!',
            reverseButtons: true
            }).then((result) => {
            if (result.isConfirmed) {
                perguntaRobo();
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                perguntaRobo();
                }
        })
            exibiuSim = true;
            }
    }

      
      // Função para exibir a mensagem de "Não"
      function exibirNao() {
        if (!exibiuNao) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
                })
                
                swalWithBootstrapButtons.fire({
                title: 'A resposta para sua pergunta é:',
                text: "Não",
                icon: 'error',
                showCancelButton: true,
                confirmButtonText: 'Ok!',
                cancelButtonText: 'Fechar',
                }).then((result) => {
                if (result.isConfirmed) {
                    perguntaRobo();
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    perguntaRobo();
                    }
            })
            exibiuNao = true;
        }
    }

    switch (indice){

        case 0: //  "Seu personagem está usando óculos?"
        var exibiuSim = false;
        var exibiuNao = false;
        const personagensOculos = ["Edna Moda", "Dexter","Eustácio", "Johnny Bravo"];
        if (personagensOculos.includes(personagemAleatorio)){
            var itensARemover = ["Buzz Lightear", "Dick Vigarista", "Doutora Brinquedos", "Fred Flinstone", "Girafales", "Guido", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Sherlock Holmes", "Vicky", "Woody", "Homer Simpson"]
            Buzz.style.opacity = 0.3;
            dick.style.opacity = 0.3;
            Doutora.style.opacity = 0.3;
            Earl.style.opacity = 0.3;
            Fred.style.opacity = 0.3;
            Girafales.style.opacity = 0.3;
            Guido.style.opacity = 0.3;
            Homer.style.opacity = 0.3;
            Linguini.style.opacity = 0.3;
            Lula.style.opacity = 0.3;
            Mario.style.opacity = 0.3;
            Popeye.style.opacity = 0.3;
            Sherlock.style.opacity = 0.3;
            Vicky.style.opacity = 0.3;
            Woody.style.opacity = 0.3;
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);  
            });
        } else {
            var itensARemover = ["Edna Moda", "Dexter", "Eustácio", "Johnny Bravo","Prefeito"]
            Edna.style.opacity = 0.3;
            Dexter.style.opacity = 0.3;
            Eustacio.style.opacity = 0.3;
            Johnny.style.opacity = 0.3;
            Prefeito.style.opacity = 0.3;
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                return !itensARemover.includes(lista);             
            });
        }
        break
        

        case 1: // "Seu personagem está usando chapéu?"
        var exibiuSim = false;
        var exibiuNao = false;
        const personagensChapeu = ["Dick Vigarista", "Eustácio", "Girafales", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Woody"]
        if (personagensChapeu.includes(personagemAleatorio)){
            var itensARemover = ["Buzz Lightear", "Dexter", "Doutora Brinquedos", "Edna Moda", "Fred Flinstone", "Guido", "Johnny Bravo", "Sherlock Holmes", "Vicky", "Homer Simpson"]
            Buzz.style.opacity = 0.3;
            Dexter.style.opacity = 0.3;
            Doutora.style.opacity = 0.3;
            Edna.style.opacity = 0.3;
            Fred.style.opacity = 0.3;
            Guido.style.opacity = 0.3;
            Homer.style.opacity = 0.3;
            Johnny.style.opacity = 0.3;
            Sherlock.style.opacity = 0.3;
            Vicky.style.opacity = 0.3;
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
        } else {
            var itensARemover = ["Dick Vigarista", "Eustácio", "Girafales", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Woody"]
            dick.style.opacity = 0.3;
            Eustacio.style.opacity = 0.3;
            Girafales.style.opacity = 0.3;
            Linguini.style.opacity = 0.3;
            Lula.style.opacity = 0.3;
            Mario.style.opacity = 0.3;
            Popeye.style.opacity = 0.3;
            Prefeito.style.opacity = 0.3;
            Woody.style.opacity = 0.3;
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
            Buzz.style.opacity = 0.3;
            Dexter.style.opacity = 0.3;
            Doutora.style.opacity = 0.3;
            Edna.style.opacity = 0.3;
            Eustacio.style.opacity = 0.3;
            Fred.style.opacity = 0.3;
            Guido.style.opacity = 0.3;
            Homer.style.opacity = 0.3;
            Johnny.style.opacity = 0.3;
            Linguini.style.opacity = 0.3;
            Lula.style.opacity = 0.3;
            Popeye.style.opacity = 0.3;
            Sherlock.style.opacity = 0.3;
            Vicky.style.opacity = 0.3;
            Woody.style.opacity = 0.3;
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Dick Vigarista", "Girafales", "Mario", "Earl", "Prefeito"]
            dick.style.opacity = 0.3;
            Earl.style.opacity = 0.3;
            Girafales.style.opacity = 0.3;
            Mario.style.opacity = 0.3;
            Prefeito.style.opacity = 0.3;
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
            Doutora.style.opacity = 0.3;
            Edna.style.opacity = 0.3;
            Vicky.style.opacity = 0.3;
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Johnny Bravo", "Linguini", "Lula Molusco", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Woody", "Homer Simpson"];
            Buzz.style.opacity = 0.3;
            Dexter.style.opacity = 0.3;
            dick.style.opacity = 0.3;
            Earl.style.opacity = 0.3;
            Eustacio.style.opacity = 0.3;
            Fred.style.opacity = 0.3;
            Girafales.style.opacity = 0.3;
            Guido.style.opacity = 0.3;
            Homer.style.opacity = 0.3;
            Johnny.style.opacity = 0.3;
            Linguini.style.opacity = 0.3;
            Lula.style.opacity = 0.3;
            Mario.style.opacity = 0.3;
            Popeye.style.opacity = 0.3;
            Prefeito.style.opacity = 0.3;
            Sherlock.style.opacity = 0.3;
            Woody.style.opacity = 0.3;
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
            Dexter.style.opacity = 0.3;
            dick.style.opacity = 0.3;
            Doutora.style.opacity = 0.3;
            Edna.style.opacity = 0.3;
            Fred.style.opacity = 0.3;
            Girafales.style.opacity = 0.3;
            Johnny.style.opacity = 0.3;
            Linguini.style.opacity = 0.3;
            Mario.style.opacity = 0.3;
            Sherlock.style.opacity = 0.3;
            Vicky.style.opacity = 0.3;
            Woody.style.opacity = 0.3;
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
        } else {
            var itensARemover = ["Buzz Lightear","Eustácio","Guido","Lula Molusco","Popeye","Earl", "Prefeito","Homer Simpson"];
            
            Earl.style.opacity = 0.3;
            Eustacio.style.opacity = 0.3;
            Guido.style.opacity = 0.3;
            Homer.style.opacity = 0.3;
            Lula.style.opacity = 0.3;
            Popeye.style.opacity = 0.3;
            Prefeito.style.opacity = 0.3;
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
            Buzz.style.opacity = 0.3;
            Dexter.style.opacity = 0.3;
            dick.style.opacity = 0.3;
            Doutora.style.opacity = 0.3;
            Earl.style.opacity = 0.3;
            Edna.style.opacity = 0.3;
            Eustacio.style.opacity = 0.3;
            Fred.style.opacity = 0.3;
            Girafales.style.opacity = 0.3;
            Guido.style.opacity = 0.3;
            Homer.style.opacity = 0.3;
            Linguini.style.opacity = 0.3;
            Lula.style.opacity = 0.3;
            Mario.style.opacity = 0.3;
            Popeye.style.opacity = 0.3;
            Prefeito.style.opacity = 0.3;
            Sherlock.style.opacity = 0.3;
            Vicky.style.opacity = 0.3;
            Woody.style.opacity = 0.3;
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Johnny Bravo"];
            Johnny.style.opacity = 0.3;
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
            Buzz.style.opacity = 0.3;
            Dexter.style.opacity = 0.3;
            dick.style.opacity = 0.3;
            Earl.style.opacity = 0.3;
            Edna.style.opacity = 0.3;
            Eustacio.style.opacity = 0.3;
            Fred.style.opacity = 0.3;
            Girafales.style.opacity = 0.3;
            Guido.style.opacity = 0.3;
            Homer.style.opacity = 0.3;
            Johnny.style.opacity = 0.3;
            Linguini.style.opacity = 0.3;
            Lula.style.opacity = 0.3;
            Popeye.style.opacity = 0.3;
            Prefeito.style.opacity = 0.3;
            Vicky.style.opacity = 0.3;
            Woody.style.opacity = 0.3;
            var itensARemover = ["Buzz Lightear", "Dexter", "Dick Vigarista", "Lula Molusco", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Guido", "Linguini", "Johnny Bravo","Popeye", "Earl", "Prefeito", "Vicky", "Homer Simpson"];
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Doutora Brinquedos", "Mario", "Sherlock Holmes", "Woody"];
            Doutora.style.opacity = 0.3;
            Mario.style.opacity = 0.3;
            Sherlock.style.opacity = 0.3;
            Woody.style.opacity = 0.3;
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
            Buzz.style.opacity = 0.3;
            Dexter.style.opacity = 0.3;
            Doutora.style.opacity = 0.3;
            Eustacio.style.opacity = 0.3;
            Guido.style.opacity = 0.3;
            Homer.style.opacity = 0.3;
            Johnny.style.opacity = 0.3;
            Linguini.style.opacity = 0.3;
            Lula.style.opacity = 0.3;
            Mario.style.opacity = 0.3;
            Popeye.style.opacity = 0.3;
            Prefeito.style.opacity = 0.3;
            Sherlock.style.opacity = 0.3;
            Vicky.style.opacity = 0.3;
            Woody.style.opacity = 0.3;
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Dick Vigarista","Edna Moda", "Fred Flinstone", "Girafales","Earl"];
            dick.style.opacity = 0.3;
            Earl.style.opacity = 0.3;
            Edna.style.opacity = 0.3;
            Fred.style.opacity = 0.3;
            Girafales.style.opacity = 0.3;
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
            Buzz.style.opacity = 0.3;
            Guido.style.opacity = 0.3;
            Lula.style.opacity = 0.3;
            Woody.style.opacity = 0.3;
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirSim(); // Exibe a mensagem de "Sim" apenas uma vez
                return !itensARemover.includes(lista);   
            });
       
        } else {
            var itensARemover = ["Dexter", "Dick Vigarista", "Doutora Brinquedos", "Edna Moda", "Eustácio", "Fred Flinstone", "Girafales", "Johnny Bravo", "Linguini", "Mario", "Popeye", "Earl", "Prefeito", "Sherlock Holmes", "Vicky", "Homer Simpson" ];
            Dexter.style.opacity = 0.3;
            dick.style.opacity = 0.3;
            Doutora.style.opacity = 0.3;
            Earl.style.opacity = 0.3;
            Edna.style.opacity = 0.3;
            Eustacio.style.opacity = 0.3;
            Fred.style.opacity = 0.3;
            Girafales.style.opacity = 0.3;
            Homer.style.opacity = 0.3;
            Johnny.style.opacity = 0.3;
            Linguini.style.opacity = 0.3;
            Mario.style.opacity = 0.3;
            Popeye.style.opacity = 0.3;
            Prefeito.style.opacity = 0.3;
            Sherlock.style.opacity = 0.3;
            Vicky.style.opacity = 0.3;
            removerPersonagensJogador = removerPersonagensJogador.filter(function(lista) {
                exibirNao(); // Exibe a mensagem de "Não" apenas uma vez
                return !itensARemover.includes(lista);             
            });
        }
        break
    }

    document.getElementById("removerPersonagensJogador").innerHTML = removerPersonagensJogador;
    document.getElementById("removerPersonagensIA").innerHTML = removerPersonagensIA;

    if (removerPersonagensJogador.length === 1) {
        const personagemRestante = removerPersonagensJogador.pop();
        var indicePersonagemRestante = personagens.indexOf(personagemRestante)
        Swal.fire({
            title: 'Você acertou!',
            text: 'Meu personagem é : '+personagemRestante,
            imageUrl: pic[indicePersonagemRestante],
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showCancelButton: true,
            confirmButtonText: 'Tentar Novamente!',
            cancelButtonText: 'Sair!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
                window.location.href = "index.html"
            }
          })
        }
        else{
            return null
        }  

    }

exibirPergunta(); // Exibe a primeira pergunta // Lista de perguntas ++ 
