const averageTempMonth1 = [72, 76, 82, 84, 73];
const averageTempMonth2 = [84, 80, 81, 78, 71];
const averageTempMonth3 = [86, 83, 81, 78, 82];

const averageTemp = [averageTempMonth1, averageTempMonth2, averageTempMonth3];

console.log(averageTemp);

for (let index1 = 0; index1 < averageTemp.length; index1 += 1) {
  for (let index2 = 0; index2 < averageTemp[index1].length; index2 += 1) {
    // console.log(averageTemp[index1][index2]);
  }
}

// Para arrays multidimensionais

for (let i = 0; i < averageTemp.length; i += 1) {
  for (let j = 0; j < averageTemp[i].length; j += 1) {
    for (let z = 0; z < averageTemp[i][j].length; z += 1) {
      console.log(averageTemp[i][j][z]);
    }
  }
}
