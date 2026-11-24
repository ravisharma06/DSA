// max element in the array


// let arr = [32, 59, 42, 56, 92, 13];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max)









// second max element in the array
// let arr = [32, 59, 42, 56, 92, 13];

// let max = Math.max(arr[0], arr[1])
// let smax = Math.min(arr[0], arr[1])

// for (let i = 2; i < arr.length; i++) {

// //     if (arr[i] > max) {
// //         smax = max
// //         max = arr[i]
// //     }
// //     else if (arr[i] > smax && max != arr[i]) {
// //         smax = arr[i]
// //     }
// // }


// // console.log(smax)


// // reverse the array
// // with extra space

// // let arr = [32, 59, 42, 56, 92, 13];
// // let temp = new Array(arr.length)

// // let i = arr.length - 1

// // for (let j = 0; j < arr.length; j++) {
// //     temp[j] = arr[i]
// //     i--;
// // }

// // console.log(temp)


// // // without extra space
// // let arr = [32, 59, 42, 56, 92, 13];
// // let i = 0;
// // let j = arr.length - 1;


// // while (i < j) {
// //     let temp = arr[i]
// //     arr[i] = arr[j]
// //     arr[j] = arr[i]
// //     i++;
// //     j--;
// // }

// // console.log(arr)






// //All zero on the left side and one at the right side.



// // let arr = [1, 1, 0, 1, 1, 0, 1, 1, 0]
// // let i = 0;
// // let j = 0;


// // while (i < arr.length) {
// //     if (arr[i] === 0) {
// //         let temp = arr[i]
// //         arr[i] = arr[j]
// //         arr[j] = temp
// //         j++;

// //     }
// //     i++;
// // }


// // console.log(arr)


// //move all the  negative elements on the left side ad positive elements on the right side o(n)

// let arr = [-4, 1, 4, -6, 1,9, 1, -2]
// let i = 0
// let j = 0


// while (i < arr.length) {
//     if (arr[i] < 0) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }

// console.log(arr)