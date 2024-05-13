// 1-savol.

// function invertStringToArray(str) {
//   return str.split("").reverse().map(Number);
// }

// let inputString = prompt("Marhamat qilib raqamlar kiriting:");

// if (/^\d+$/.test(inputString)) {
//   let invertedArray = invertStringToArray(inputString);
//   console.log(invertedArray);
// } else {
//   console.error(
//     "Juda oshqovoqona ma'lumot kiritilgan :) , Iltimos RAqam kiriting."
//   );
// }

// 2-savol.

// let x = 5;

// if (x == '5') {
//   console.log("== true"); // Bu qator ishga tushadi, chunki qiymatlarni bir-biriga taqqoslaydi.
// }

// if (x === '5') {
//   console.log("=== true"); // Bu qator ishga tushmaydi, chunki qiymatlar turini taqqoslash uchun !== operatoridan foydalanadi.
// } else {
//   console.log("=== false"); // Shu joyda chiqadi, chunki '===' operator qiymatlarni turiga qarab taqqoslash mumkin bo'ladi.
// }

// 3-savol.

// function createNumberArray(n) {
//     if (n <= 0) {
//       return [];
//     } else {
//       const arr = createNumberArray(n - 1);
//       arr.push(n);
//       return arr;
//     }
//   }

//   const num = +prompt("Marhamat qilib qiymatni kiriting:");
//   const numberArray = createNumberArray(num);
//   console.log(numberArray);

// 4-savol.

// function sumOddEven(arr) {
//   const oddSum = arr
//     .filter((num) => num % 2 !== 0)
//     .reduce((sum, num) => sum + num, 0);
//   const evenSum = arr
//     .filter((num) => num % 2 === 0)
//     .reduce((sum, num) => sum + num, 0);
//   return [oddSum, evenSum];
// }

// const inputStr = prompt("Marhamat qilib Vergul bilan ajratilgan raqamlarni kiriting:");
// const arr = inputStr.split(",").map(Number);

// const sums = sumOddEven(arr);
// console.log(sums);

// 5-savol.

// function removeExclamations(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== '!') {
//         result += str[i];
//       }
//     }
//     return result;
//   }

//   const strWithExclamations = "Hello! World!!";
//   const cleanStr = removeExclamations(strWithExclamations);
//   console.log(cleanStr);

// 6-savol.

// function sumArrays(arr1, arr2) {
//   const combinedArr = arr1.concat(arr2);
//   const sum = combinedArr.reduce((total, num) => total + num, 0);
//   return sum;
// }

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const totalSum = sumArrays(array1, array2);
// console.log(totalSum);

// 7-savol.

// function removeFirstAndLast(str) {
//   if (str.length < 2) {
//     return "";
//   }

//   let result = "";
//   for (let i = 1; i < str.length - 1; i++) {
//     result += str[i];
//   }
//   return result;
// }

// const str = "Hello teacher";
// const modifiedStr = removeFirstAndLast(str);
// console.log(modifiedStr);

// 8-savol.

// function reverseArrayInPlace(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }

//   return arr;
// }

// const array = [1, 2, 3, 4, 5];
// reverseArrayInPlace(array);
// console.log(array);

// 9-savol.

// function removeTrailingZero(strNum) {
//   if (strNum[strNum.length - 1] === "0") {
//     return strNum.slice(0, -1);
//   } else {
//     return strNum;
//   }
// }

// const numStr1 = "1230";
// const numStr2 = "456";
// console.log(removeTrailingZero(numStr1));
// console.log(removeTrailingZero(numStr2));

// 10-savol.

// function findSmallestWithOutput(arr) {
//   if (arr.length === 0) {
//     return "Array bo'sh holatda ekan.";
//   }

//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }

//   return `Arraydagi eng kichik raqam bu: ${smallest}`;
// }

// const numbers = [5, 2, 8, 1, 9];
// const result = findSmallestWithOutput(numbers);
// console.log(result);

// Barcha masalalarning ikkinchi usuli:

// N{1}

// "34567" => [7, 6, 5, 4, 3]

// const word = "34567"
//   .split("")
//   .reverse()
//   .map((item) => {
//     return Number(item);
//   });

// console.log(word);   // [7, 6, 5, 4, 3]

// N{2}

// 5 == '5'  true;
// 5 ==='5'  false;

//  JavaScript-da == va === o'rtasidagi farq:

// `==` va `===` ikkalasi ham taqqoslash operatorlaridir, lekin ularning asosiy farqi bor:

// * `==` (Tenglik operatori): Bu operator bo'sh tenglikni tekshiradi. U turni o'zgartirishni amalga oshirgandan so'ng ikkita operandning qiymatlarini taqqoslaydi.
// * `===` ( Qat'iy tenglik operatori ): Bu operator qat'iy tenglikni tekshiradi. U ikkita operandning qiymatlari va turlarini taqqoslaydi. Ular teng deb hisoblash uchun bir xil bo'lishi kerak.

// Quyida asosiy farqlarni jamlagan jadval keltirilgan:

// | Operator | Taqqoslash turi | Turni aylantirish | Misol |
// |---|---|---|---|
// | `==` | Bo'sh tenglik | Turni konvertatsiya qilishni amalga oshiradi | `5 == "5"` (to'g'ri) |
// | `===` | Qattiq tenglik | Turi konvertatsiya qilinmaydi | `5 === "5"` (noto'g'ri) |

// ## If-else bilan misol:

// x = 5 bo'lsin;
// y = "5" bo'lsin;

// if (x == y) {
//    console.log("x va y bir xil qiymatga ega (bo'sh tenglik)");
// } else {
//    console.log("x va y bir xil qiymat yoki turga ega emas");+
// }

// if (x === y) {
//    console.log("x va y bir xil qiymat va turga ega (qat'iy tenglik)");
// } else {
//    console.log("x va y bir xil qiymat yoki turga ega emas");
// }

// Output:

// x va y bir xil qiymatga ega (bo'sh tenglik)
// x va y bir xil qiymatga yoki turga ega emas

// Tushuntirish:

//  Birinchi `if` ifodasida `x == y` rost, chunki taqqoslashdan oldin «5» qatori 5 raqamiga aylantiriladi.
//  Ikkinchi `if` ifodasida `x === y` noto'g'ri, chunki qiymatlar bir xil bo'lsa ham, turlar har xil (raqam va qator).

// N{3}

let son = 6;
let result = [];

function recursionFuntion() {
  result.unshift(son);
  son--;
  if (1 <= son) {
    recursionFuntion();
  }
  return result;
}

console.log(recursionFuntion(son));
