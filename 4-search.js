// 23_5-4 (advanced) Find the matching product by searching products

const products = [
    { name: 'asus laptop', price: 35000 },
    { name: 'smart watch samsung', price: 700 },
    { name: 'dell laptop', price: 25000 },
    { name: 'smart tv samsung', price: 8000 },
    { name: 'smart tv lg', price: 8000 },
    { name: 'lenovo laptop', price: 25000 },
];

function searchProducts(products, searchText) {
    const result = []
    for (const product of products) {
        if (product.name.includes(searchText)) {
            // console.log(product.name);
            result.push(product)
        }
    }
    return result;
}

const match = searchProducts(products, 'smart tv')
console.log(match)