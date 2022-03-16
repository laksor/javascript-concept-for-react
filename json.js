// JSON, Fetch, keys, values, array add or remove using dots

const student = {
    name: 'sakib',
    age: 45,
    movies: ['king', 'sallu'],
}

// JSON stringify (js to string)
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

// JSON parse (convert to normal js)
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// fetch 

fetch('url')
    .then (res => res.json())
    .then(data => console.log(data));

// keys

const Keys = Object.keys(student);
console.log(Keys);

// values
const value = Object.values(student);
console.log(value);

// for of using on array like object
// for in using on object

const products = [
    {name: 'laptop', price: 3000, brand: 'lenovo', color: 'blue'},
    {name: 'watch', price: 4000, brand: 'samsung', color: 'red'},
    {name: 'phone', price: 35000, brand: 'apple', color: 'silver'},
    {name: 'sunGlass', price: 300, brand: 'rivon', color: 'gold'},
    {name: 'camera', price: 30000, brand: 'canon', color: 'yellow'}
];

const newProduct = { name: 'webcam', price: 5000, brand: 'lal'};

// copy product array and then add new using spread operator
const newProducts = [...products, newProduct];

// create a new array without one specidic item
// remove a phone and create new array
const remaining = products.filter(product => product.name !== 'phone');