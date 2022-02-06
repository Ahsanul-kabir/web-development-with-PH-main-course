// 23_5-1 Understand for loop in a forward and reverse way

// for (let i = 1; i < 6; i++) {
//     console.log(i)
// }

function consoleNumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    consoleNumber(i + 1);
}
consoleNumber(1);

