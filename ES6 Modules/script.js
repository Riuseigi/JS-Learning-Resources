// ES6 Module = external file that contains reusable code that can be imported into other javascript files.

// Write Reusable Code for many different apps;
// Can contain variables, classes,functions ... and more
// Introduced as part of ECMAScript 2015 update



import {PI, getCircumference,getArea,getVolume} from './mathUtil.js'

console.log(PI);

const circumference = getCircumference(10).toFixed(2);
const area = getArea(10).toFixed(2);
const volume = getVolume(10).toFixed(2);
console.log(`${circumference}cm`);
console.log(`${area}cm^2`);
console.log(`${volume}cm^3`)