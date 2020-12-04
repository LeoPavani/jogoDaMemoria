const elemento = document.querySelector(".jogo");
const elemParaModal = document.querySelector("#modal");
// console.log(elemParaModal.className)

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
  }else{
    voltaCarta();
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
  }, 1500);
  
  
}

function verificaVitoria(){
  
  if(pontos == 9){
    setTimeout(() => {
      colocaModalVitoria(elemParaModal);
    }, 2000);
  }else{
    console.log("Ainda não...")
  }
  
}


function colocaModalVitoria(elemParaModal){
  elemParaModal.classList.remove("escondeModal");
};

