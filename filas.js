class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;
    return result;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
    // return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
    // return Object.values(this.items).length;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
    // OU
    // aqui vai falhar, pq não vai zerar o lowestCount
    // while (this.size() !== 0) {
    //   this.dequeue();
    // }
  }

  toString() {
    if (this.isEmpty()) return "";
    let objString = `${this.items[this.lowestCount]}`;
    for (let index = this.lowestCount + 1; index < this.count; index += 1) {
      objString = `${objString},${this.items[index]}`;
    }
    return objString;
  }
}

const myQueue = new Queue();

console.log(myQueue.isEmpty());

myQueue.enqueue("Baêta");

myQueue.enqueue("João");

myQueue.enqueue("Juju");

console.log(myQueue.peek());

console.log(myQueue.isEmpty());

console.log(myQueue.items, myQueue.size(), myQueue.lowestCount);

myQueue.clear();

// myQueue.dequeue();

// console.log(myQueue.items, myQueue.size(), myQueue.lowestCount);

// myQueue.dequeue();

console.log(myQueue.items, myQueue.size(), myQueue.lowestCount);

// export default Queue;

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];
  for (let index = 0; index < elementsList.length; index += 1) {
    queue.enqueue(elementsList[index]);
  }
  while (queue.size() > 1) {
    for (let index = 0; index < num; index += 1) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}

const names = ["Henrique", "Thati", "João", "Ana"];

const result = hotPotato(names, 3);

result.eliminated.forEach((player) => {
  console.log(player);
});
console.log(result.winner);
