# Day 2: Variables

## What Are Variables?

A variable is a container that stores a value. In JavaScript, there are three ways to create a variable: `let`, `var`, and `const`.

## `const`

In `const`, reassignment is not possible.

## `let`

In `let`, reassignment is possible. If you access a variable before initialization, a `ReferenceError` will occur. It says that the variable cannot be accessed before initialization.

## `var`

`var` is the old way to create a variable. Reassignment is possible, and accessing a `var` before initialization gives us `undefined`.

## Undeclared Variables

If you assign a value to a name without using `let`, `var`, or `const`, it creates a global variable in non-strict mode. In strict mode, you get an error.

## Relation Between Strings and Numbers

A string is text represented in single or double quotes. A number is a numeric value.

### Addition

- `string + string = string`
- `string + number = string`
- `number + number = number`

```js
"1" + 1   // "11" (concatenation)
"1" + "1" // "11" (concatenation)
1 + 1     // 2 (number)
```

The `+` operator can do arithmetic or concatenation.

### Other Arithmetic Operators

- `-` can do arithmetic subtraction: `'1' - 1 = 0`
- `*` can do multiplication: `'1' * 1 = 1`
- `/` can do division: `'1' / 1 = 1`
- `%` can give you the remainder. We call this the modulus operator: `'1' % 1 = 0`

### Type Coercion

Type coercion means JavaScript automatically converts one data type into another data type.

```js
"1" + 1 // "11"
```

JavaScript changes `1` (number) to `"1"` (string). Changing one type to another is called casting; parsing is another way to convert a value.

## Swap Two Variables

### With an Extra Variable

```js
let cont1 = 100;
let cont2 = 95;

let temp = cont1;
cont1 = cont2;
cont2 = temp;
```

### With Mathematical Calculation

```js
a = a + b;
b = a - b;
a = a - b;
```

### With Array Destructuring

```js
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);
```
