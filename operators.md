Operators

Arithmetic operators

+ = 10 + 10 = 20
- = 10 - 10 = 0
* = 10 * 10 = 100
/ = 10 / 10 = 1
% = 10 % 10 = 0 (remainder)

Relational or Comparison Operators

10 < 20 = true
10 > 30 = false
10 <= 10 = true
10 != 10 = false

10 == 10 = true (checks equality after type conversion)
'10' == 10 = true (checks equality after type conversion)
'10' === 10 = false (checks both value and data type)

Logical Operators

&& = if all conditions are true, the result is true

if (10 < 20 && 20 > 10) => true

|| = if any one condition is true, the result is true
if (10 < 20 || 20 < 10) => true

! = reverses true to false and false to true

if (!true) => false

Unary Operators

Increment (++) and decrement (--)

1. Pre-increment
2. Post-increment

Post-increment (a++): use the value, then increment.
Pre-increment (++a): increment first, then use the value.

let a = 100;
console.log(a++); // 100; a is now 101
console.log(a++); // 101; a is now 102

let b = 100;
console.log(++b); // 101; b is now 101
console.log(++b); // 102; b is now 102

The same order applies to post-decrement (a--) and pre-decrement (--a).
Increment and decrement operators cannot be used to change a const variable.
