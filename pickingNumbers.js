/* https://www.hackerrank.com/challenges/picking-numbers/problem */

function pickingNumbers(a) {
  // where a is an  array

  let b = []; //array from a
  let maxLength = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] - a[j] === 1 || a[i] - a[j] === 0) {
        //a[i] - a[j] === -1 ||
        //console.log("i:", i, "\nj:", j, "\nb init:", b);
        b.push(a[j]);
        //console.log("i:", i, "\nj:", j, "\nb fin:", b);
      }
    }
    //console.log("i:", i, "\nb end:", b, "\nmax length init:", maxLength);
    if (b.length > maxLength) {
      maxLength = b.length;
      //console.log("i:", i, "\nb end:", b, "\nmax length fin:", maxLength);
    }
    b = [];
  }
  return maxLength;
}

let arr1 = [1, 1, 2, 2, 4, 4, 5, 5, 5];
let arr2 = [1, 2, 2, 3, 1, 2];
let arr3 = [4, 6, 5, 3, 3, 1];

console.log("arr1:", pickingNumbers(arr1));
console.log("arr3:", pickingNumbers(arr3));
console.log("arr2:", pickingNumbers(arr2));
