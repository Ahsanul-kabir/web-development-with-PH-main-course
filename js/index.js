// json = javascript object notation

const user = { id: '11', name: 'amir', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'alia',
    shop: 'RanbirShop',
    products: ['shoes', 'shirts', 'pants'],
    owner: {
        name: 'alia butt',
        profession: 'actor'
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
console.log(shopStringified.owner); // Stringified String = not possible because stringify can't use object property
const converted = JSON.parse(shopStringified);
// console.log(converted);
console.log(converted.owner);