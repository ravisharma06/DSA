// array left rotation by 1 



// let arr = [10, 20, 30, 40, 50];

// let temp = arr[0]
// for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i]
// }


// arr[arr.length - 1] = temp


// console.log(arr)







// array right rotation by 1
// let temp = arr[arr.length - 1]

// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1]
// }

// arr[0] = temp






// array rotation by k times

// let k = 6;

// k = k % arr.length


// if (k === 0) {
//     console.log(arr)
// } else {
//     for (let j = 1; j <= k; j++) {
//         let temp = arr[0]
//         for (let i = 1; i < arr.length; i++) {
//             arr[i - 1] = arr[i]
//         }

//         arr[arr.length - 1] = temp


//         console.log(arr)
//     }
// }



// subarray  group 
// eg:- {1,2,3,5,7}
//target =  12



let arr = [1, 2, 3, 5, 7]
let target =  12
let count = 0;

for (let i = 0; i < arr.length; i++) {
    let sum = 0

    for (let j = i; j < arr.length; j++) {
        sum += arr[j]
        if (sum === target) {
            count++
        }
    }

}


console.log(count)