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
  let coinSet = Set(coinArr);

  let minLength = coinArr.length;
  let sbstr = [];

  for (let i = 0; i < coinArr.length; i++) {
    for (let j = i + coinSet.size(); j < coinArr.length; j++) {
      sbstr = coinArr.slice(i, j);
      if (Set(sbstr) === coinSet) {
        if (sbstr.length < minLength) {
          minLength = sbstr.length;
        }
      }
    }
  }

  return minLength;
}
