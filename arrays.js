const fibo = [];
fibo[0] = 1;
fibo[1] = 1;

for (let index = 2; index < 20; index += 1) {
  fibo[index] = fibo[index - 1] + fibo[index - 2];
}

for (let index = 1; index < fibo.length; index += 1) {
  console.log(fibo[index]);
}

console.log(fibo)