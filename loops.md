<!-- 
entry controlled loop
exit controlled loop -->



<!-- <!--  -->
function isPrime(n) {
    // Write your logic here

    if (n < 2) {
        return "Not Prime"
    }

    let isPrime = 1
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            isPrime++;
        }
    }

    if (isPrime === 2) {
        return ("Prime")
    }
    else {
        return ("Not Prime")
    }


}

module.exports = { isPrime }; -->