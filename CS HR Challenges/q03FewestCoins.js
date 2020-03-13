/*
 * Complete the 'fewestCoins' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING coins as parameter.
 *
 * letters representing coint types
 * shortest substring with all coin types
 */

function fewestCoins(coins) {
  // Write your code here
  let coinArr = coins.split("");
  let coinSet = new Set(coinArr);

  console.log("coins: ", coins);
  console.log("coinArr: ", coinArr);
  console.log("coinSet: ", coinSet);

  let minLength = coinArr.length;
  let sbstr = [];
  console.log("minLength init: ", minLength);

  let inc = 1;

  for (let i = 0; i < coinArr.length; i++) {
    for (let j = i + coinSet.size - 1; j < coinArr.length; j += inc) {
      sbstr = coinArr.slice(i, j + 1);
      sbSet = new Set(sbstr);
      inc = coinSet.size - sbSet.size;

      console.log("i: ", i, "       j: ", j);
      console.log("substr: ", sbstr);
      console.log("sbSet: ", sbSet);
      console.log("Set equality ", inc === 0);

      if (inc === 0) {
        if (sbstr.length < minLength) {
          minLength = sbstr.length;
          console.log("new minLength: ", minLength);
        }
        j = coinArr.length; //stops at full set
        inc = 1; //reset inc to 1
      }
    }
  }

  return minLength;
}

console.log("minLengthFinal", fewestCoins("dabbcabcd"));
