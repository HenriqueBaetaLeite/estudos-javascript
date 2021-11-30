const testCarNumberOne = {
  model: "Tesla",
  year: 2018,
  chassi: {
    number: "fdjfh388c392j29",
    type: "rigid body",
  },
  print: function () {
    console.log(this.model);
  },
};

const testCarNumberTwo = { ...testCarNumberOne };

const testCarNumberThree = Object.assign({}, testCarNumberOne);

testCarNumberTwo.year = 2021;
testCarNumberTwo.chassi.type = "not defined";

testCarNumberThree.year = 2023;
testCarNumberThree.chassi.number = "0002023T";

// console.log(testCarNumberOne);

// console.log(testCarNumberThree)

// As maneiras acima não são corretas
// Podemos observar que acontece um shallow clone.

// Aqui embaixo tem um defeito, perdemos funções

const cloneJSON = JSON.parse(JSON.stringify(testCarNumberOne));

cloneJSON.chassi.number = true;

console.log(testCarNumberOne);

console.log(cloneJSON);

// Ou utilizando bibliotecas externas como o loadash/cloneDeep e o rfdc

import cloneDeep from "lodash/cloneDeep";
import rfdc from 'rfdc';

const RFDC = rfdc({ proto: true });
const cloneRFDC = RFDC(testCarNumberOne);

const myClone = cloneDeep(testCarNumberOne);

