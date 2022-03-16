// 35-7 (advanced) Closure, encapsulation, private variable

// একটা Function থেকে আর একটা Function কে যদি Return করি তাহলে তারা নিজেদের মধ্যে একটা close environment বা private reference বা encapsulation তৈরি করে তাকে Closure বলে।

function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());

let clock2 = stopWatch();
console.log(clock2());


console.log(clock1());