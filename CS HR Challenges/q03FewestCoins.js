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

  for (let i = 0; i < coinArr.length; i++) {
    for (let j = i + coinSet.size - 1; j < coinArr.length; j++) {
      sbstr = coinArr.slice(i, j);
      sbSet = new Set(sbstr);

      console.log("i: ", i, "       j: ", j);
      console.log("substr: ", sbstr);
      console.log("sbSet: ", coiSet);

      if (sbSet === coinSet) {
        if (sbstr.length < minLength) {
          minLength = sbstr.length;
        }
      }
    }
  }

  return minLength;
}
