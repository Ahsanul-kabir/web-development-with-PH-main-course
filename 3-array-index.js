// 18-3 Array index, get and set by index, indexOf

var books = ['hablu', 'bolod', 'chouddogosti', 'battery', 'peracitamol', 'gymansium'];

var batteryIndex = books.indexOf('battery');
// console.log(batteryIndex);

var numbers = [45, 98, 65, 72, 52, 63];
var index = numbers.indexOf(52);
var index = numbers.indexOf(159);
// console.log(index);

var secondIndex = books[2];
// console.log(secondIndex)
console.log(numbers);
numbers[1] = 95;
numbers[4] = 21;
console.log(numbers);


// -1 = not here index in array
// undefined = not here element in array
