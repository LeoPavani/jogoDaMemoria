const elemento = document.querySelector(".jogo");
const elemParaModal = document.querySelector("#modal");

let elementosClicados = [];
let cartasClicadasPorRodada = 0;
let primeiroId = 0;
let segundoId = 0;
let pontos = 0;
const numeroDePares = defineNumeroDePares();
const tempoAntesDaCartaErradaVirarDeVolta = 1500;
const tempoParaAparecerMensagemVitoria = 800;


elemento.addEventListener("click", function(event){
  event.preventDefault();

  const clicado = event.target;
  segundoId = clicado.id
  const virado = clicado.className;
  
  verificaSeIdDasCartasSaoDiferentes(virado, clicado)
    
  primeiroId = clicado.id;
});


function verificaDupla(){
  //verifica as classes (se for igual, a imagem também será)...
  if(elementosClicados[0] === elementosClicados[1]){
    pontos ++;
  }else{
    voltaCarta();
  }
  elementosClicados = [];
  cartasClicadasPorRodada -= 2;
};

function viraCarta(clicado){
  clicado.classList.toggle("verso");
};

function colocaNoVetorDeVerificacao(clicado){
  //Para fazer a verificação(comparação), coloquei em um vetor...
  const classeElementoClicado = clicado.className;
  elementosClicados.push(classeElementoClicado);
} 

function voltaCarta(){
  const primeiro = document.getElementById(primeiroId);
  const segundo = document.getElementById(segundoId);
  
  setTimeout(() => {
    primeiro.classList.toggle("verso");
    segundo.classList.toggle("verso");
  }, tempoAntesDaCartaErradaVirarDeVolta);
  
  
}

function verificaVitoria(numeroDePares){
  if(pontos == numeroDePares){
    setTimeout(() => {
      colocaModalVitoria(elemParaModal);
    }, tempoParaAparecerMensagemVitoria);
  }else{
    console.log("Ainda não...")
  } 
}

function colocaModalVitoria(elemParaModal){
  elemParaModal.classList.remove("escondeModal");
};

function verificaSeDuasCartasForamClicadas(cartasClicadasPorRodada, clicado){
  if (cartasClicadasPorRodada > 0){
    verificaDupla(elementosClicados, clicado);
    verificaVitoria(numeroDePares);
  }
}

function verificaSeIdDasCartasSaoDiferentes(virado, clicado){
  if (seCartaEstaViradaParaBaixo(virado) && clicado.id){
    viraCarta(clicado);
    colocaNoVetorDeVerificacao(clicado);
    verificaSeDuasCartasForamClicadas(cartasClicadasPorRodada, clicado);
    cartasClicadasPorRodada ++;
  }
}

function seCartaEstaViradaParaBaixo(virado){
  if (virado.indexOf('verso') !== -1){
    return true;
  }else{
    return false;
  }
}

function defineNumeroDePares(){
const numeroDeCartas = elemento.childNodes.length - 2;
  const numeroDosPares = numeroDeCartas / 2;
  
  return numeroDosPares;
}; 




