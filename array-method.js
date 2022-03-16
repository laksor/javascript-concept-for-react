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

// foreach (no return)
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
// multi line
products.forEach(product => {

})

// filter

const cheap = products.filter(product => product.price > 5000);
console.log(cheap);

const name = products.filter(product => product.name.includes('w'));
console.log(name);

// find (only show the first one)
const special = products.find(product => product.name.includes('n'));
console.log(special);