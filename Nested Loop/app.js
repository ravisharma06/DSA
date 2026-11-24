const prompt = require('prompt-sync')()
let n = prompt("enter the number ")



// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }


// for (let i = 1; i <= n; i++) {
//     for (let j = n; j >= i; j--) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }




// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j + " ")
//     }
//     console.log()
// }


// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(i + " ")
//     }
//     console.log()
// }



// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i + 1; j++) {
//         process.stdout.write(j + " ")
//     }
//     console.log()
// }




// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(n - j + 1 + " ")
//     }
//     console.log()
// }


// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write("-")
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }

//     console.log()
// // }


// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(64 + j) + " ")
//     }
//     console.log()
// }



// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j + i - 1 + " ")
//     }
//     console.log()
// }


// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (i === 1 || i === 5 || j == 1 || j === 5) {
//             process.stdout.write("*")
//         } else {
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }



//  // Upper pyramid
//     for (let i = 1; i <= n; i++) {

//         for (let j = 1; j <= n - i; j++) {
//             process.stdout.write(" ");
//         }

//         for (let j = 1; j <= 2 * i - 1; j++) {
//             process.stdout.write("*");
//         }

//         console.log();
//     }

//     // Lower inverted pyramid
//     for (let i = n - 1; i >= 1; i--) {

//         for (let j = 1; j <= n - i; j++) {
//             process.stdout.write(" ");
//         }

//         for (let j = 1; j <= 2 * i - 1; j++) {
//             process.stdout.write("*");
//         }

//         console.log();
//     }



// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         if ((i + j) % 2 === 0) {
//             process.stdout.write("1 ")
//         }
//         else {
//             process.stdout.write("0 ")
//         }
//     }
//     console.log()
// }


// for (let i = 1; i <= n; i++) {

//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*")
//     }

//     for (let j = 1; j <= (n - i) * 2; j++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*")
//     }
//     console.log()

// }


// for (let i = 1; i <= n - 1; i++) {
//     for (let j = n - i; j >= 1; j--) {
//         process.stdout.write("*")
//     }

//     for (let j = 1; j <= 2 * i; j++) {
//         process.stdout.write(" ")
//     }

//     for (let j = n - i; j >= 1; j--) {
//         process.stdout.write("*")
//     }

//     console.log()

// }



// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         process.stdout.write(j * i + " ")
//     }
//     console.log()
// }