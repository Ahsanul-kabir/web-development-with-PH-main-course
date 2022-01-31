calculateInterest = (principal, rate, time) => {
    return principal * rate * time;
}

let principal = 1000;
let rate = 0.05;
let time = 1;
console.log(calculateInterest(principal, rate, time));


