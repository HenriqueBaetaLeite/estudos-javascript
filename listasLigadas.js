function defaultEquals(a, b) {
  return a === b;
}

// classe Node representa o item que queremos adicionar na lista e um ponteiro que faz a
// ligação para o próximo nó da lista;
export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
    }
    this.count += 1;
  }
}

const myList = new LinkedList();

myList.push(18);

myList.push(15);

myList.push(23);

console.log(myList);
