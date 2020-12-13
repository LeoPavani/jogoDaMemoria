const elemento = document.querySelector(".jogo");
const elemParaModal = document.querySelector("#modal");
const telaNaoClicavel = document.querySelector("#tela");

let elementosClicados = [];
let cartasClicadasPorRodada = 0;
let primeiroId = 0;
let segundoId = 0;
let pontos = 0;
const numeroDePares = defineNumeroDePares();
const tempoAntesDaCartaErradaVirarDeVolta = 2000;
const tempoParaAparecerMensagemVitoria = 800;
const tempoNaoClicavel = 1600;
const tempoParaVirarACarta = 300;
const escalaInteira = "scale(1)";
const escalaEnquantoCartaVira = "scale(0.1, 1)";


elemento.addEventListener("click", function(event){
  event.preventDefault();

  const clicado = event.target;
  segundoId = clicado.id
  const virado = clicado.className;
  
  verificaSePodeMostrarCarta(virado, clicado)
    
  primeiroId = clicado.id;
});


function animaACartaVirando(carta){
  carta.animate({"transform" : escalaEnquantoCartaVira}, tempoParaVirarACarta);
    setTimeout(() => {
      trocaClasseVerso(carta);
      carta.style.transform = escalaEnquantoCartaVira;
      carta.animate({"transform" : escalaInteira}, tempoParaVirarACarta);
      setTimeout(() => {
        carta.style.transform = escalaInteira;

      }, tempoParaVirarACarta);
  }, (tempoParaVirarACarta - 10));
}

function colocaModalVitoria(elemParaModal){
  elemParaModal.classList.remove("escondeModal");
}

function colocaNoVetorDeVerificacao(clicado){
  //Para fazer a verificação(comparação), coloquei em um vetor...
  const classeElementoClicado = clicado.className;
  elementosClicados.push(classeElementoClicado);
} 

function defineNumeroDePares(){
  const numeroDeCartas = elemento.childNodes.length - 2;
  const numeroDosPares = numeroDeCartas / 2;
  
  return numeroDosPares;
}

function desviraCarta(){
  
  const primeiro = document.getElementById(primeiroId);
  const segundo = document.getElementById(segundoId);
  
  setTimeout(() => {
    animaACartaVirando(primeiro);
    animaACartaVirando(segundo);
  }, tempoAntesDaCartaErradaVirarDeVolta);

}

function fazValidacoes(cartasClicadasPorRodada, clicado){
  if (verificaSeUmaDuplaJaFoiClicada(cartasClicadasPorRodada)){
    verificaDupla(elementosClicados, clicado);
    verificaVitoria(numeroDePares);
  }
}

function invalidaCliques(){
  telaNaoClicavel.classList.add("naoClicavel");
}

function seCartaEstaViradaParaBaixo(virado){
  if (virado.indexOf('verso') !== -1){
    return true;
  }else{
    return false;
  }
} 

function trocaClasseVerso(alvo){
  alvo.classList.toggle("verso");
}

function validaCliques(){
  telaNaoClicavel.classList.remove("naoClicavel");
}

function verificaDupla(){
  //verifica as classes (se for igual, a imagem também será)...
  if(elementosClicados[0] === elementosClicados[1]){
    pontos ++;
  }else{
    invalidaCliques();
    setTimeout(() => {
      validaCliques();
    }, tempoNaoClicavel);
    desviraCarta();
  }
  elementosClicados = [];
  cartasClicadasPorRodada -= 2;
}

function verificaSePodeMostrarCarta(virado, clicado){
  if (seCartaEstaViradaParaBaixo(virado) && clicado.id){
    viraCarta(clicado);
    colocaNoVetorDeVerificacao(clicado);
    fazValidacoes(cartasClicadasPorRodada, clicado);
    cartasClicadasPorRodada ++;
  }
}

function verificaSeUmaDuplaJaFoiClicada(cartasClicadasPorRodada){
  if (cartasClicadasPorRodada > 0){
    return true;
  } else{
    return false;
  }
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

function viraCarta(clicado){
  animaACartaVirando(clicado);
}
