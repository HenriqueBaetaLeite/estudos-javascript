import Queue from "./filas";

console.log(Queue);

function hotPotatoe(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];
  for (let index = 0; index < elementsList.length; index += 1) {
    queue.enqueue(elementsList[index]);
  }
}
