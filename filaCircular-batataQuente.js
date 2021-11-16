import Queue from "./filas";

console.log(Queue);

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
