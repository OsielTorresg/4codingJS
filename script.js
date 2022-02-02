///easy////
function avg(arr) {
  var sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(avg([1, 4, 7]));
console.log(avg([10, 5]));
console.log(avg([1.5, 3, 2.5, 1]));
/////medium/////
let numbers = [4, 5, 6, 7, 0, 1, 2];
let firstNums = (numArr, target) => numArr.indexOf(target);
console.log(firstNums(numbers, 7));

// const num = [4, 5, 6, 7, 0, 1, 2];
// const idx = num.indexOf(0);
// const idx2 = num.indexOf(3);
// console.log(idx);
// console.log(idx2);
// very hard/////
// var coinChange = function (coins, amount) {
//   const table = new Array(amount + 1).fill(infinity);
//   table[0] = 0;

//   for (let coin of coins) {
//     for (let i = 0; i < table.length; i++) {
//       if (coin <= i) {
//         let idx = i - coin;
//         let potentialAmt = table[idx] + 1;
//         table[i] = Math.min(potentialAmt, table[i]);
//       }
//     }
//   }
//   return table[table.length - 1] === infinity ? -1 : table[table.length - 1];
// };
