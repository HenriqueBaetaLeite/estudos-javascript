class Book {
  constructor(title, name, isbn) {
    this.title = title;
    this.name = name;
    this.isbn = isbn;
  }
  printISBN() {
    console.log(this.isbn);
  }
}

const book = new Book("O Elo perdido", "James C.H", 45);

book.printISBN();

// HERANÇA

class ITBook extends Book {
  constructor(title, name, isbn, tech) {
    super(title, name, isbn);
    this.tech = tech;
  }
  printTech() {
    console.log(this.tech);
  }
}

const itBook = new ITBook("Teste aqui", "Autor R.", 89873, "JavaScript");

itBook.printTech();

// GETTERS SETTER

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const eu = new Person('Henrique');

console.log(eu.name)

eu.name = 'Henrique Baeta'

console.log(eu._name)