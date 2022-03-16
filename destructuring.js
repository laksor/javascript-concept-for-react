// Array and object Destructuring, optional chaining

// const products = [
//     {name: 'laptop', price: 3000, brand: 'lenovo', color: 'blue'},
//     {name: 'watch', price: 4000, brand: 'samsung', color: 'red'},
//     {name: 'phone', price: 35000, brand: 'apple', color: 'silver'},
//     {name: 'sunGlass', price: 300, brand: 'rivon', color: 'gold'},
//     {name: 'camera', price: 30000, brand: 'canon', color: 'yellow'}
// ];

const numbers = [33, 44];

// old method:

// const x = numbers[0];
// const y = numbers[1];

//  Destructuring
const [firstN, secondN] = numbers;
const [x, y] = [33, 44];
console.log(x, y);

function box (num1 , num2){
    const nums = [num1, num2];
    return nums;
}
const [first, second] = box(90, 44);
// console.log(box(44, 44));

// object  Destructuring

const {name, age} = { name: 'alu', age: 66 };

const employee = {
    ide: 'VS CODE',
    desi: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 77,
        drink: 'water',
        watch: {
            color: 'red',
            price: 6000
        }
    }
}

const {machine, ide} = employee;
const {weight, drink} = employee.specification;
const {color} = employee.specification.watch;
console.log(color);

