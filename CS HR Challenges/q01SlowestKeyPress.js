/*
 * Complete the 'slowestKey' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts 2D_INTEGER_ARRAY keyTimes as parameter.
 */

function slowestKey(keyTimes) {
  // Write your code here
  let timeMax = keyTimes[0][1] - 0;
  let char = String.fromCharCode(97 + keyTimes[0][0]);

  for (let i = 1; i < keyTimes.length; i++) {
    if (keyTimes[i][1] - keyTimes[i - 1][1] > timeMax) {
      timeMax = keyTimes[i][1] - keyTimes[i - 1][1];
      char = String.fromCharCode(97 + keyTimes[i][0]);
    }
    // console.log(
    //   "time dif",
    //   keyTimes[i][1] - keyTimes[i - 1][1],
    //   "\nchar: ",
    //   String.fromCharCode(97 + keyTimes[i][0])
    // );
  }
  return char;
}

console.log(
  "char: ",
  slowestKey([
    [0, 2],
    [1, 5],
    [0, 9],
    [2, 15]
  ])
);

arr2 = [
  [0, 3],
  [20, 5],
  [2, 6],
  [15, 7],
  [9, 8],
  [19, 9],
  [24, 10],
  [4, 12],
  [3, 13]
];

console.log("missed: ", slowestKey(arr2));
