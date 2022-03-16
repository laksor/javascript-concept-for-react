// 6 fundamentals

// 1. declare a variable using let and const

const fatherName = 'adam';
let season = 'rainy';
season = 'winter';

// 2.condition
// 6 basic condition ( > , < , === , !== , <= , >=)
// multiple conditional operator : && (AND), ||(OR)

if(fatherName === 'adam' || season === 'rainy'){

}
else if(fatherName !== 'lama'){

}
else{

}
// 3.array declare
// index
// length, push
const arr = [3, 4, 5, 6, 7];
arr[2] = 56;

// 4.loop
for(let i = 0; i < 10; i++){
    const arr = arr[i];
    console.log(arr);
}
// 5.function 
function mul (num1, num2){
    const result = num1 * num2;
    return result;
}
const output = mul(4, 5);
console.log(output);
// 6. object
//3 ways to access property by name
const student = {
    name: 'sakib',
    age: 45,
    movies: ['king', 'sallu'],
}

console.log(student.name); // direct by property
console.log(student['age']); // access by property name
