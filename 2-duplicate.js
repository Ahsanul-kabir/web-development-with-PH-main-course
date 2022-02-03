// 22-2 Remove duplicate items from an array

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];
const ages = [10, 20, 30, 10, 20, 50, 60]

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     // console.log(element);
    // }

    // this loop name is for of loop
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
// const uniqueAges = removeDuplicate(ages);
console.log(uniqueNames);
// console.log(uniqueAges);