//Começo EER

function getNAF() {
  select = document.getElementById('seleçao');
  naf = select.value;
  console.log(naf);
  naf = Number(naf);
} 
function getI() {
  i = document.getElementById('iId').value;
  console.log(i);
  i = Number(i);
}
function getP() {
  p = document.getElementById('pId').value;
  console.log(p);
  p = Number(p);
}
function getE() {
  e = document.getElementById('eId').value;
  console.log(e);
  e = Number(e);
}

function calc() {
  total = 354 - (6.91 * i) + naf * (9.36 * p) + (726 * e);
  total = total.toFixed(2);
  document.querySelector('.outputEER').textContent= total;
}

// Fim EER

// Começo IMC

function calcPeso(){
  peso = document.getElementById('recebePeso').value;
  peso = Number(peso);
  console.log(peso);
}
function calcAltura(){
  altura = document.getElementById('recebeAltura').value;
  altura = Number(altura);
  console.log(altura);
}
function calcIMC(){
  imc = peso/Math.pow(altura, 2);
  if (imc < 18.5) {
    clas = ". Você está abaixo do peso.";
  }
  else if (imc > 18.5 && imc < 24.9) {
    clas = ". Você está com peso normal."
  }
  else if (imc > 25 && imc < 29.9) {
    clas = ". Você está com sobrepeso."
  }
  else if (imc > 30 && imc < 34.9) {
    clas = ". Você está com obesidade grau I."
  }
  else if (imc > 35 && imc < 39.9) {
    clas = ". Você está com obesidade grau II."
  }
  else if (imc >= 40) {
    clas = ". Você está com obesidade grau III."
  }
  else {
    clas = " (Valor inválido.)";
  }
  imc = imc.toFixed(2);
  console.log(imc);
  document.querySelector('.outputIMC').textContent = imc + clas ;
}

// Fim IMC





// EER (kcal/dia) = 354 – (6,91 x I) + NAF x [(9,36 x P) + (726 x E)]
// I = idade em anos P = peso em Kg E = altura em metros
