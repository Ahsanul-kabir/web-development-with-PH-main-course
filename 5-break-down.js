// 23_5-5 Explore break and continue for selecting some products

const products = [
    { name: 'asus laptop', price: 35000 },
    { name: 'dell laptop', price: 30000 },
    { name: 'lenovo laptop', price: 25000 },
    { name: 'smart watch samsung', price: 700 },
    { name: 'smart tv samsung', price: 7000 },
    { name: 'smart tv lg', price: 8000 },
];


// for (const product of products) {
//     if (product.price < 9000) {
//         break;
//     }
//     console.log(product);
// }

for (const product of products) {
    if (product.price < 9000) {
        continue;
    }
    console.log(product);
}

console.log('after the loop')