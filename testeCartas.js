const carta1 = `<div class="carta primeiroPar verso" id="1"></div>`;
const carta2 = `<div class="carta primeiroPar verso" id="2"></div>`;
const carta3 = `<div class="carta segundoPar verso" id="3"></div>`;
const carta4 = `<div class="carta segundoPar verso" id="4"></div>`;
const carta5 = `<div class="carta terceiroPar verso" id="5"></div>`;
const carta6 = `<div class="carta terceiroPar verso" id="6"></div>`;
const carta7 = `<div class="carta quartoPar verso" id="7"></div>`;
const carta8 = `<div class="carta quartoPar verso" id="8"></div>`;
const carta9 = `<div class="carta quintoPar verso" id="9"></div>`;
const carta10 = `<div class="carta quintoPar verso" id="10"></div>`;
const carta11 = `<div class="carta sextoPar verso" id="11"></div>`;
const carta12 = `<div class="carta sextoPar verso" id="12"></div>`;
const carta13 = `<div class="carta setimoPar verso" id="13"></div>`;
const carta14 = `<div class="carta setimoPar verso" id="14"></div>`;
const carta15 = `<div class="carta oitavoPar verso" id="15"></div>`;
const carta16 = `<div class="carta oitavoPar verso" id="16"></div>`;
const carta17 = `<div class="carta nonoPar verso" id="17"></div>`;
const carta18 = `<div class="carta nonoPar verso" id="18"></div>`;

const arrayDeCartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16, carta17, carta18 ];
const embaralhado = shuffle(arrayDeCartas);
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


const body = document.querySelector("body");
body.innerHTML = 
`
  <div class="jogo">
    ${embaralhado[0]}${embaralhado[1]}${embaralhado[2]}${embaralhado[3]}${embaralhado[4]}${embaralhado[5]}${embaralhado[6]}${embaralhado[7]}${embaralhado[8]}${embaralhado[9]}${embaralhado[10]}${embaralhado[11]}${embaralhado[12]}${embaralhado[13]}${embaralhado[14]}${embaralhado[15]}${embaralhado[16]}${embaralhado[17]}
      </div>
  `
;
