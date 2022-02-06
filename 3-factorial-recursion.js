// 23_5-3 Explore Factorial Recursion using a for loop concept


/*
1! = 1
2! = 2 X 1
3! = 3 X 2 X 1
4! = 4 X 3 X 2 X 1
5! = 5 X 4 X 3 X 2 X 1

n! = n * (n-1)!
*/

// let factorial = 1
// for (let i = 4; i >= 1; i--) {
//     factorial = factorial * i
// }
// console.log(factorial)



function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const myFactorial = factorial(5);
console.log(myFactorial);