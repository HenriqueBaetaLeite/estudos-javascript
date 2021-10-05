const { ModuleKind } = require("typescript");

class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(element) {
    this.items[this.count] = element;
    this.count += 1;
  }
  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count -= 1;

    const poped = this.items[this.count];
    delete this.items[this.count];
    return poped;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
    // while (!this.isEmpty()) {
    //   this.pop();
    // }
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let index = 1; index < this.count; index += 1) {
      objString = `${objString},${this.items[index]}`;
    }
    return objString;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(8);

// console.log(stack.isEmpty());

// stack.pop();

// console.log(stack);

// console.log(stack.peek());

// console.log(stack.toString());

module.exports = Stack;
