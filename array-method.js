// Array methods map filter find forEach

const products = [
    {name: 'laptop', price: 3000, brand: 'lenovo', color: 'blue'},
    {name: 'watch', price: 4000, brand: 'samsung', color: 'red'},
    {name: 'phone', price: 35000, brand: 'apple', color: 'silver'},
    {name: 'sunGlass', price: 300, brand: 'rivon', color: 'gold'},
    {name: 'camera', price: 30000, brand: 'canon', color: 'yellow'}
];

// map
const brands = products.map(product => product.brand);
console.log(brands);
const price = products.map(product => product.price);
console.log(price);

// foreach 
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
// multi line
products.forEach(product => {

})

// 