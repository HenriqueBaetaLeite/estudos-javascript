class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount -= 1;
      this.items[this.lowestCount] = element;
    } else {
      for (let index = this.count; index > 0; index -= 1) {
        this.items[index] = this.items[index - 1];
      }
      this.count += 1;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  removeFront() {
    if (this.isEmpty()) return undefined;

    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) return undefined;

    this.count -= 1;
    let result = this.items[this.count];

    delete this.items[this.count];

    return result;
  }

  peekFront() {
    if (this.isEmpty()) return undefined;

    return this.items[this.lowestCount];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    let objString = `${this.items[this.lowestCount]}`;
    for (let index = this.lowestCount + 1; index < this.count; index -= 1) {
      objString = `${objString},${this.items[index]}`;
    }
    return objString;
  }
}

const myDeque = new Deque();
console.log(myDeque.isEmpty());

console.log(myDeque.size());
myDeque.addBack("Henrque");

myDeque.addFront("Joao");

console.log(myDeque.items);

console.log(myDeque.size());

function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }
  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(" ").join("");
  console.log(aString)
  console.log(lowerString)
  let isEqual = true;
  let firstChar, lastChar;
  for (let index = 0; index < lowerString.length; index += 1) {
    deque.addBack(lowerString.charAt(index));
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}

console.log('É palindrome?', palindromeChecker("Kayak"));
