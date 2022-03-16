// 35-2 Primitive data type and non-primitive data type


/*
Data types
primitive data types = immutable
1. number
2. string
3. boolean
4. undefined
5. null

7. symbol

non-primitive = mutable
6. object
*/


// primitive exp.
let a = 'hello';
let b = a;
// console.log(a, b);
a = 'gello';
// console.log(a, b);


// non-primitive exp.
const x = { job: 'web developer' }
const y = x;
console.log(x, y);
// x.job = 'front end developer';
y.job = 'front end developer';
console.log(x, y);