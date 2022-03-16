// 35-9 Module summary pass by reference pass by value

// Primitive type এর কোন value parameter হিসাবে Pass করলে পরে Function এর  ভিতরে মান Change করলে console.log বা return করলে পরে এর মধ্যে একটা copy করা হয় না  বা‍ Change হয় না।

// Non-primitive type(likes, object) এর কোন value parameter হিসাবে Pass করলে পরে Function এর  ভিতরে মান Change করলে console.log বা return করলে পরে এর মধ্যে একটা copy করা হয়  বা‍ Change হয়।



const a = 'Alim uddin';
const b = 23;
const c = true;
// null
// undefined

// primitive
// non-primitive=object

const nums = [23, 12, 56, 34];
// console.log(typeof nums);
// Array.isArray(nums)

function triple(x, y, z) {
    x.age = 88888;
    // y = 2222;
    // z = 333;
}
// console.log(typeof triple);
// console.log(triple.length);
const num1 = 3;
const num2 = 5;
const num3 = 7;
// triple(num1, num2, num3);
const myObj = { name: 'kuddus', age: 17 };
triple(myObj);
console.log(myObj);
// console.log(num1, num2, num3);
// console.log(typeof null);  // object




// Call by reference and value. Example,
function triple(x, y, z) {
    x.age = 999;
}
const myObj2 = { name: 'kuddus', age: 17 };
triple(myObj2);
console.log(myObj2);    // reference value change
