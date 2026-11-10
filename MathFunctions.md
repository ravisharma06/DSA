# JavaScript Math Functions

JavaScript's built-in `Math` object provides properties and methods for common mathematical operations.

## Absolute Value

`Math.abs()` returns the absolute value: negative numbers become positive, and positive numbers stay positive.

```js
Math.abs(-44); // 44
Math.abs(44);  // 44
```

## Rounding Numbers

- `Math.ceil()` rounds up to the next integer.
- `Math.floor()` rounds down to the next integer.
- `Math.round()` rounds to the nearest integer.
- `Math.trunc()` removes the decimal part, rounding toward zero.

```js
Math.ceil(4.2);  // 5
Math.floor(4.8); // 4
Math.round(4.5); // 5
Math.trunc(4.8); // 4
Math.trunc(-4.8); // -4
```

## Maximum and Minimum

- `Math.max()` returns the largest of the numbers provided.
- `Math.min()` returns the smallest of the numbers provided.

```js
Math.max(3, 8, 2); // 8
Math.min(3, 8, 2); // 2
```

## Powers and Roots

- `Math.pow(base, exponent)` returns the base raised to the exponent.
- `Math.sqrt()` returns the square root.
- `Math.cbrt()` returns the cube root.

```js
Math.pow(2, 3); // 8
Math.sqrt(25);  // 5
Math.cbrt(27);  // 3
```

## Random Numbers

`Math.random()` returns a pseudo-random number greater than or equal to `0` and less than `1`.

```js
Math.random(); // For example: 0.427...
```

To get a random integer from `min` through `max`, inclusive:

```js
const min = 1;
const max = 10;
const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
```

## Formatting a Number

`toFixed(digits)` formats a number with the specified number of digits after the decimal point. It returns a string.

```js
(3.14159).toFixed(2); // "3.14"
```
