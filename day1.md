# Day 1: JavaScript Foundations for DSA

## Variables

A variable is a named binding that lets you refer to a value.

```js
let score = 10;
score = 15; // Reassignment is allowed

const name = "Sam"; // Reassignment is not allowed
var oldStyle = true; // Avoid var in most modern JavaScript
```

- `let` can be reassigned and is block-scoped.
- `const` cannot be reassigned and is block-scoped. It must be initialized when declared.
- `var` can be reassigned and is function-scoped. Its declaration is hoisted and initialized to `undefined`.
- `let` and `const` declarations are also hoisted, but cannot be accessed before their declaration is reached. This is called the **temporal dead zone**.

`const` prevents reassignment of the variable, not mutation of an object or array stored in it:

```js
const numbers = [1, 2];
numbers.push(3); // Allowed
// numbers = [4, 5]; // Error: reassignment is not allowed
```

## Strings and Numbers

- A **string** represents text, usually written with single quotes, double quotes, or backticks: `"hello"`.
- A **number** represents a numeric value, such as `9` or `5.5`.

The `+` operator adds numbers or concatenates strings:

```js
1 + 1       // 2
"1" + 1     // "11"
"1" + "1"   // "11"
```

Other arithmetic operators generally convert numeric strings to numbers:

```js
"1" - 1     // 0
8 / 2       // 4
8 % 3       // 2 (remainder)
```

JavaScript converting a value's type during an operation is called **type coercion**. Be mindful of it when working with input or comparing values.

## Getting User Input

In a browser, `prompt()` asks the user for input and returns a string or `null`:

```js
const answer = prompt("Enter a number:");
const number = Number(answer);
```

In Node.js, you can use a package such as `prompt-sync` to read input. Input read from the terminal is also text, so convert it when you need a number.

## Swapping Variables

The temporary-variable method works for values of any type:

```js
let a = 3;
let b = 7;

const temp = a;
a = b;
b = temp;
```

JavaScript also supports swapping with array destructuring:

```js
[a, b] = [b, a];
```

An arithmetic swap is possible for numbers, but is less readable and can cause numeric precision or overflow issues in some languages. Prefer a temporary variable or destructuring.
