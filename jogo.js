const elemento = document.querySelector(".jogo");


let elementosClicados = [];
let contador = 0;
let primeiroId = 0;
let segundoId = 0;
elemento.addEventListener("click", function(event){
  event.preventDefault();
  const clicado = event.target;
  segundoId = clicado.id

  //verifica se os IDs são diferentes 
  //e se o objeto clicado possui um id
  //(para o fundo não ser clicável)
  if (segundoId != primeiroId && clicado.id){
    viraCarta(clicado);
    colocaNoVetorDeVerificacao(clicado);
    
    if (contador > 0){
      verificaDupla(elementosClicados, clicado); 
    }
    
    
    
    contador ++;
  }
  console.log(primeiroId, segundoId);
  primeiroId = clicado.id;
  console.log(primeiroId, segundoId);
  
});


//verifica as classes (se for igual, a imagem também será)
//settimeout para dar tempo de animar 
//a carta antes de dar o resultado. 
function verificaDupla(){
  if(elementosClicados[0] === elementosClicados[1]){
    setTimeout(() => {
      alert("Você acertou!");
    }, 600);
  }else{
    digaBomDia();
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

function digaBomDia(){
  const primeiro = document.getElementById(primeiroId);
  const segundo = document.getElementById(segundoId);

  setTimeout(() => {
    primeiro.classList.toggle("verso");
    segundo.classList.toggle("verso");
  }, 600);
  

}



// && (elementosClicados[0].id != elementosClicados[1].id)