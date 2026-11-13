// Reverse the number

// const prompt = require('prompt-sync')();
// let number = Number(prompt("enter the number "))

// //1234


// let rev = 0
// while (number > 0) {
//     let rem = number % 10;
//     rev = (rev * 10) + rem
//     number = Math.floor(number / 10)
// }

// console.log(rev)



// check the ISBN number

// 10 digit (1 * d1) + (2 *  d2) + (3 * d3) + (4 * d4) + (5 * d5) + (6 * d6) -----  (10 * d10)  mod 11 === 0
// 11 digit (1 * d1) + (3 *  d2) + (1 * d3) + (3 * d4) + (1 * d5) + (3 * d6) -----  (10 * d10)  mod 10 === 0

// const prompt = require('prompt-sync')();
// let n = Number(prompt("enter the number "))

// // 9788175257665

// // let count = 0;
// // let copy = n
// // while (n > 0) {
// //     let rem = n % 10;
// //     count++;
// //     n = Math.floor(n / 10)
// // }

// // console.log(count)

// // if (count != 10) {
// //     console.log("invalid isbn number ")
// // } else {
// //     let ans = 0
// //     let digit = 10
// //     while (copy > 0) {
// //         let rem = copy % 10;
// //         ans = ans + (digit * rem);
// //         digit--;
// //         copy = Math.floor(copy / 10)


// //     }

// //     console.log(ans)

// //     console.log(ans % 11 == 0 ? "valid isbn" : "invalid isbn")
// // }



// // 9780306406157
// let count = 0;
// let copy = n
// while (n > 0) {
//     let rem = n % 10;
//     count++;
//     n = Math.floor(n / 10)
// }

// console.log(count)

// if (count != 13) {
//     console.log("invalid isbn number ")
// } else {
//     let i = 0
//     let ans = 0
//     while (copy > 0) {
//         let rem = copy % 10;

//         if (i % 2 == 0) {
//             ans = ans + (rem * 1)
//         }else{
//             ans = ans + (rem * 3)
//         }
//         i++;
//         copy = Math.floor(copy / 10)


//     }

//     console.log(ans)

//     console.log(ans % 10 == 0 ? "valid isbn" : "invalid isbn")
// }



// automorphic number


const prompt = require('prompt-sync')();
let n = Number(prompt("enter the number "))
let count = 0

//5
let copy = n 
let sq = Math.pow(n, 2) 
while (n > 0) {
    count++;
    n = Math.floor(n / 10)
}


let digit = sq % Math.pow(10, count)
console.log(copy === digit ? "automorphic number" : "not automorphic number")

