const elemento = document.querySelector(".jogo");


let elementosClicados = [];
let contador = 0;
let primeiroId = 0;
let segundoId = 0;
let pontos = 0;


elemento.addEventListener("click", function(event){
  event.preventDefault();
  const clicado = event.target;
  segundoId = clicado.id
  
  const virado = clicado.className;
  
  
  
  //verifica se os IDs são diferentes 
  //e se o objeto clicado possui um id
  //(para o fundo não ser clicável)
  if (virado.indexOf('verso') !== -1 && clicado.id){
    viraCarta(clicado);
    colocaNoVetorDeVerificacao(clicado);
    
    if (contador > 0){
      verificaDupla(elementosClicados, clicado);
      verificaVitoria();

    }
    
    
    
    contador ++;
  }
  
  primeiroId = clicado.id;
  
  
});


//verifica as classes (se for igual, a imagem também será)
//settimeout para dar tempo de animar 
//a carta antes de dar o resultado. 
function verificaDupla(){
  if(elementosClicados[0] === elementosClicados[1]){
    pontos ++;
    setTimeout(() => {
      alert("Parabéns!");
    }, 600);
  }else{
    voltaCarta();
    setTimeout(() => {
      alert("Tente novamente!");
    }, 600);
  }
  elementosClicados = [];
  contador = -1;
};

function viraCarta(clicado){
  clicado.classList.toggle("verso");
};

//Para afzer a verificação (comparação), coloquei em um vetor
function colocaNoVetorDeVerificacao(clicado){
  const classeElementoClicado = clicado.className;
  elementosClicados.push(classeElementoClicado);
} 

function voltaCarta(){
  const primeiro = document.getElementById(primeiroId);
  const segundo = document.getElementById(segundoId);

  setTimeout(() => {
    primeiro.classList.toggle("verso");
    segundo.classList.toggle("verso");
  }, 600);
  

}

function verificaVitoria(){

  if(pontos == 9){
    setTimeout(() => {
      alert("VOCÊ GANHOU!!!! UHUUUUUUUUL!!!!  PARABÉNS!!!!!!!");
    }, 1000);
  }else{
    console.log("Ainda não...")
  }
  
}
