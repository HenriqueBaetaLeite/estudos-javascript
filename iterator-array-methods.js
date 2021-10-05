const numbers = [45, 78, 13, 4];

const iterator = numbers[Symbol.iterator]();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// for (let number of iterator) {
//   console.log(number);
// }

// let aEntries = numbers.entries();

// for (let entrie of aEntries) {
//   console.log(entrie);
// }

// let aKeys = numbers.keys();

// for (let key of aKeys) {
//   console.log(key);
// }

// let aValues = numbers.values();

// for (let value of aValues) {
//   console.log(value);
// }

// // metodo from. faz uma cópia do array. Aceitando uma função como 2º parâmetro.

// const aFrom = Array.from(numbers);

// const aFromEven = Array.from(numbers, (number) => number % 2 === 0);

// console.log(aFrom);

// console.log("even??", aFromEven);

// numbers.push(88);

// console.log(numbers);
// console.log(aFrom);

// método of. cria outro array à partir dos argumentos passados

// const aOf = Array.of(2, 3, 5, 1);

// // igual à isto const aOf = [2, 3, 5, 1];

// console.log(aOf);

// const aOfCopy = Array.of(...aOf);

// console.log(aOfCopy);

// // método FILL

// aOfCopy.fill(3);

// console.log(aOfCopy);

// método copyWithin

// const numbersCopy = Array.from(numbers);

const numbersCopy = [1, 2, 3, 4, 5, 6];

numbersCopy.copyWithin(0, 3);

console.log(numbersCopy);

const numbersCopy2 = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// numbersCopy2.copyWithin(1, 3, 5);

console.log(numbersCopy2);

// método sort

numbersCopy2.reverse();
console.log(numbersCopy2);

numbersCopy2.sort();
console.log(numbersCopy2);

// O SORT DEIXA OS ELEMENTOS EM ORDEM LEXICOGRÁFICA, OU SEJA, "VIRA" TUDO STRING!
// O JS compara os caracteres de acordo com seu valor ASCII

numbersCopy2.sort((a, b) => a - b);
console.log(numbersCopy2);

const children = ["João", "Ana", "joão", "ana", "joao"];

children.sort();

console.log(children);

// Estes dois modos são iguais, porém não funcionam da maneira devida.
children.sort((a, b) => a - b);

children.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(children);

// É necessário utilizar o localCompare!

children.sort((a, b) => a.localeCompare(b));

console.log(children);

// indexOf e lasIndexOf

console.log(numbersCopy2);

console.log("a posição do número 10 é:", numbersCopy2.indexOf(10));

console.log("quando não encontrado, retorna -1", numbersCopy2.lastIndexOf(100));

// find e findIndex
// retornam o elemento e o index do primeiro elemento encontrado

console.log(
  "O primeiro multiplo de 3 é:",
  numbersCopy2.find((number) => number % 3 === 0)
);

console.log(
  "O index do primeiro multiplo de 5: ",
  numbersCopy2.findIndex((number) => number % 5 === 0)
);

// método includes
// Retorna um booleano, se existe ou não o elemento passado como parâmetro no array

const isThere = numbersCopy2.includes(7);
const isThere2 = numbersCopy2.includes(4, 5);

console.log("O número 7 está incluso no array?", isThere);

console.log("O número 4 está incluso no array após o index 5?", isThere2);

// Classe TyoedArray

const myArray = new Int16Array(5);

const array16 = [];

for (let index = 0; index < myArray.length; index += 1) {
  myArray[index] += index + 1;
}

console.log(myArray);

// @ts-check

// Este comentário acima, é sobre verificação de tipos, que o array tenha o mesmo tipo de elementos.

// Array em typeScript
// interface Person {
//   name: String;
//   age: number;
// }

// const friends: {name: stringm age: number}[];

const friends = [
  { name: "John", age: 7 },
  { name: "Ana", age: 3 },
];
