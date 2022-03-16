// 35-6 Block scope, global scope, Hoisting

// local, global, block scope
// local scope = only for function using & block scope in a simple block likes = for if, for, while, do while, for in, for of, forEach, map, filter, reduce, etc.
// global scope = outside of function and all place we can use.

// Hoisting = if we use var is makes hoisting = work likes global scope. not fully global scope exp. if we call "var test = 'test-contain'" then, if we call "before" declare it will give "undefined" & "after" declare it will give "test-contain" as a output.

// global scope = if we write likes "test = 'test-contain'" = global scope. because no type said


const favNum = 27;

function add(first, second) {
    // console.log(mood); // hoisting
    const result = first + second;

    if (result > 9) {
        let mood = 'happy';
        mood = 'cranky';
    }
    // console.log(mood);
    return result;
}
const sum = add(11, 35);
// console.log(mood);

for (let i = 0; i < 10; i++) {

}
// console.log(i);
