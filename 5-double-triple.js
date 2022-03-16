// 35-5 double equal (==) vs triple equal (===), implicit conversion

// (==) check only value & (===) check only value and type
// (==) is not type safe & (===) is type safe
// (==) implicit conversion করে likes, (1 && true = true, here true is converted to 1 then give true = type casting করে)
// (===) হলো state forward.
// non primitive likes object, array is not possible to comparison naturally.

const first = '0';
const second = false;
if (first == second) {
    console.log('condition is true');
}
else {
    console.log('condition is false');
}

//more comparison
// const a = { name: 'ali' };
// const b = { name: 'ali' };
const a = [];
const b = [];
if (a === b) {
    console.log('both are same')
}
else {
    console.log('they are not same')
}