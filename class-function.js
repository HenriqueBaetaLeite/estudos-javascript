function Teste(title, name) {
  this.title = title;
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const teste = new Teste("Mr.", "Henrique");

console.log(teste.name);

teste.title;

teste.teste = function () {
  console.log(this.name + this.title);
};

teste.teste();

Teste.prototype.eu = function () {
  console.error(this.title + this.name);
};

teste.eu();

const teste2 = new Teste("Sr.", "Baeta");

teste2.eu();

// teste2.teste();

teste.teste();
