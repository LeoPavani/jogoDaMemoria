const carta1 = `<div class="carta primeiroPar verso" id="um"></div>`;
const carta2 = `<div class="carta primeiroPar verso" id="dois">Play</div>`;
const carta3 = `<div class="carta segundoPar verso" id="tres"></div>`;
const carta4 = `<div class="carta segundoPar verso" id="quatro">Motor Horário</div>`;
const carta5 = `<div class="carta terceiroPar verso" id="cinco"></div>`;
const carta6 = `<div class="carta terceiroPar verso" id="seis">Motor AntiHorário</div>`;
const carta7 = `<div class="carta quartoPar verso" id="sete"></div>`;
const carta8 = `<div class="carta quartoPar verso" id="oito">Stop</div>`;
const carta9 = `<div class="carta quintoPar verso" id="nove"></div>`;
const carta10 = `<div class="carta quintoPar verso" id="dez">Potência</div>`;
const carta11 = `<div class="carta sextoPar verso" id="onze"></div>`;
const carta12 = `<div class="carta sextoPar verso" id="doze">Esperar</div>`;
const carta13 = `<div class="carta setimoPar verso" id="treze"></div>`;
const carta14 = `<div class="carta setimoPar verso" id="catorze">Desligar Motor</div>`;
const carta15 = `<div class="carta oitavoPar verso" id="quinze"></div>`;
const carta16 = `<div class="carta oitavoPar verso" id="dezesseis">Loop</div>`;
const carta17 = `<div class="carta nonoPar verso" id="dezessete"></div>`;
const carta18 = `<div class="carta nonoPar verso" id="dezoito">Sensor Inclinação</div>`;

const arrayDeCartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16, carta17, carta18 ];
const arrayTeste = [carta1, carta2, carta3, carta4, carta5, carta6];
const embaralhadoTeste = shuffle(arrayTeste);
const embaralhadoOficial = shuffle(arrayDeCartas);
const body = document.querySelector(".game");
const teste = `${embaralhadoTeste[0]}${embaralhadoTeste[1]}${embaralhadoTeste[2]}${embaralhadoTeste[3]}${embaralhadoTeste[4]}${embaralhadoTeste[5]}`;
const realOficial = `${embaralhadoOficial[0]}${embaralhadoOficial[1]}${embaralhadoOficial[2]}${embaralhadoOficial[3]}${embaralhadoOficial[4]}${embaralhadoOficial[5]}${embaralhadoOficial[6]}${embaralhadoOficial[7]}${embaralhadoOficial[8]}${embaralhadoOficial[9]}${embaralhadoOficial[10]}${embaralhadoOficial[11]}${embaralhadoOficial[12]}${embaralhadoOficial[13]}${embaralhadoOficial[14]}${embaralhadoOficial[15]}${embaralhadoOficial[16]}${embaralhadoOficial[17]}`;

embaralhaCartas(body, embaralhadoTeste, embaralhadoOficial);


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
}

function embaralhaCartas(){
  body.innerHTML = 
    `
      <div class="jogo">
        ${teste}
      </div>
    `
  ;
}
