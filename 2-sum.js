// 23_5-2 Understand recursion using sum of numbers


// for (let i = 5; i >= 1; i--) {
//     console.log(i)
// }

function sum(i) {
    console.log(i)
    if (i == 1) {
        return 1;
    }
    return i + sum(--i)
}

console.log(sum(5));


// i + sum(--1)
// 5+sum(4)
// 5+4+sum(3)
// 5+4+3+sum(2)
// 5+4+3+2+sum(1)
// 5+4+3+2+1
// 15