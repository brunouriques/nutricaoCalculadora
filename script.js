// Começo seleção opção

function showDiv() {
  mostrar = document.getElementById('selecGender').value;
  console.log(mostrar);
  if (mostrar == 'm') {
  console.log('homem');
  document.getElementById('Male').style.display = 'block';
  document.getElementById('Female').style.display = 'none';

  }
  else if (mostrar == 'f') {
    console.log('mulher');
    document.getElementById('Female').style.display = 'block';
    document.getElementById('Male').style.display = 'none';

  }
  else {
    document.getElementById('Male').style.display = 'none';
    document.getElementById('Female').style.display = 'none';

  }
}
  // if (mostrar = ) {








// escolher genero
// com base no genero, aparece uma opção de NAF
// metodo hide?

// Fim seleção opção

//Começo EER

function getNAFF() {
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
  total = 662 - (9.53 * i) + naf * (15.91 * p) + (539.6 * e);
  total = total.toFixed(2);
  document.querySelector('.outputEER').textContent = total;
}

// Fim EER

// Começo EERf

function getNAFF() {
  selectF = document.getElementById('seleçaoF');
  nafF = selectF.value;
  console.log(nafF);
  nafF = Number(nafF);
}

function getIF() {
  iF = document.getElementById('iIdF').value;
  console.log(iF);
  iF = Number(iF);
}

function getPF() {
  pF = document.getElementById('pIdF').value;
  console.log(pF);
  pF = Number(pF);
}

function getEF() {
  eF = document.getElementById('eIdF').value;
  console.log(eF);
  eF = Number(eF);
}

function calcF() {
  totalF = 354 - (6.91 * iF) + nafF * (9.36 * pF) + (726 * eF);
  totalF = totalF.toFixed(2);
  document.querySelector('.outputEERF').textContent = totalF;
}

// Fim EERf

// Começo IMC

function calcPesoF() {
  pesoF = document.getElementById('recebePesoF').value;
  pesoF = Number(pesoF);
  console.log(pesoF);
}

function calcAlturaF() {
  alturaF = document.getElementById('recebeAlturaF').value;
  alturaF = Number(alturaF);
  console.log(alturaF);
}

function calcIMCF() {
  imcF = pesoF / Math.pow(alturaF, 2);
  if (imcF < 18.5) {
    clasF = ". Você está abaixo do peso.";
  } else if (imcF > 18.5 && imcF < 24.9) {
    clasF = ". Você está com peso normal."
  } else if (imcF > 25 && imcF < 29.9) {
    clasF = ". Você está com sobrepeso."
  } else if (imcF > 30 && imcF < 34.9) {
    clasF = ". Você está com obesidade grau I."
  } else if (imcF > 35 && imcF < 39.9) {
    clasF = ". Você está com obesidade grau II."
  } else if (imcF >= 40) {
    clasF = ". Você está com obesidade grau III."
  } else {
    clasF = " (Valor inválido.)";
  }
  imcF = imcF.toFixed(2);
  console.log(imcF);
  document.querySelector('.outputIMCF').textContent = imcF + clasF;
}

// Fim IMC





// EER (kcal/dia) = 354 – (6,91 x I) + NAF x [(9,36 x P) + (726 x E)]
// I = idade em anos P = peso em Kg E = altura em metros
