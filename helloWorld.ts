// podemos escrever assim, mas é verboso, o TS já entende
// o tipo da variável quando a criamos.
let lastName: string = 'Baeta';
let isPerson : boolean = true;

// já entende o que o tipo é 'number'
let myAge = 38;

// quando não atribuímos um valor é recomendável atribuir um tipo!
let myPet: string;

let pets = ['Dog', 'Cat', 'Pig'];

myPet = pets[1];

console.log(myPet);


// INTERFACE

interface Person {
  name: string;
  age: number
}

function printName(person: Person) {
  console.log(person.name);
}

const john = {name: 'Jonh', age:  78};

const mary = {name: 'Mary', age: 34};

printName(mary);