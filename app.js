
// Prime Numbers 



let prompt = require('prompt-sync')()
let  n =  Number(prompt("enter the number "))




if (n <= 1) console.log("not prime")
else if (n == 2) console.log("prime number")
else if (n % 2 === 0) {
    console.log("not prime")
}
else {

    let isPrime = true;
    for (let i = 0; i <= Math.floor(Math.sqrt(n)); i += 2) {

        if (n % i  === 0){ 
            isPrime =  false
            break;
        }
        
    }

    console.log(isPrime === true ? "prime" : "not prime")
}