//ShortCircuiting = is a behavior exhibited by logical operators (&&, ||) where the evaluation of the second operand is skipped if the outcome can be determined by evaluating the first operand alone.

//Tuthy Values
// Truthy Values
if ('Hello') {
    console.log('Truthy!'); // Output: Truthy!
}

if (42) {
    console.log('Truthy!'); // Output: Truthy!
}

if (['apple', 'banana']) {
    console.log('Truthy!'); // Output: Truthy!
}

// Falsy Values
if ('') {
    console.log('Falsy!'); // This code block is not executed
}

if (0) {
    console.log('Falsy!'); // This code block is not executed
}

if (null) {
    console.log('Falsy!'); // This code block is not executed
}

//The && Operator
// The && operator returns the first falsy operand, or the last truthy operand if all operands are truthy.

// const value = 0;
// const result = value && 'Truthy Value';
// console.log(result); // Output: 0

const value = 'Hello';
const result = value && 'Truthy Value';
console.log(result); // Output: Truthy Value


//The || Operator
// The || operator returns the first truthy operand, or the last falsy operand if all operands are falsy.
// const name = '';
// const displayName = name || 'Guest';
// console.log(displayName); // Output: Guest

const name = 'Alice';
const displayName = name || 'Guest';
console.log(displayName); // Output: Alice


//Safely Accessing Nested Properties
// Short-circuiting can also be used to safely access nested properties of objects.

const user = { address: { city: 'New York' } };
const city = user.address && user.address.city;
console.log(city); // Output: New York