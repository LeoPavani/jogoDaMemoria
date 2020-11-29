const elemento = document.querySelector(".jogo");


let elementosClicados = [];
let contador = 0;
let primeiraId = 0
elemento.addEventListener("click", function(event){
  event.preventDefault();
  const clicado = event.target;
  if (clicado.id != primeiraId){
    viraCarta(clicado);
    colocaNoVetorDeVerificacao(clicado);
  
    if (contador > 0){
      verificaDupla(elementosClicados, clicado);  
   }
  
 

   contador ++;
   console.log(clicado.id)
  }
  
});


function verificaDupla(clicado){
  if(elementosClicados[0] === elementosClicados[1]){
    setTimeout(() => {
      alert("Você acertou!");
      return true;
    }, 600);
  }else{
    setTimeout(() => {
      alert("Tente novamente!");
      return false;
    }, 600);
  }
  elementosClicados = [];
  contador = -1;
};

function viraCarta(clicado){
  clicado.classList.toggle("verso");
};

function colocaNoVetorDeVerificacao(clicado){
  const classeElementoClicado = clicado.className;
  elementosClicados.push(classeElementoClicado);
} 

// && (elementosClicados[0].id != elementosClicados[1].id)