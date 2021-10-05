// Respeita o princípio LIFO (last in first out)
class Stack {
  constructor() {
    this.items = [];
  }

  pushe(element) {
    this.items.push(element);
  }

  pope() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const myStack = new Stack();

console.log(myStack.isEmpty());

myStack.pushe(5);
myStack.pushe(23);

console.log(myStack.peek());

myStack.pushe(4);

console.log(myStack.size());
console.log(myStack.isEmpty());

myStack.pope();

console.log(myStack.size());
