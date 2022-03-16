// template string, arrow function, spread operator

const arr = [3, 4, 5, 6, 7];
const student = {
    name: 'sakib',
    age: 45,
    movies: ['king', 'sallu'],
}

// template string back tik : ``
const about = `my name is ${student.name} age of ${student.age} has number ${arr[2]} also like movies ${student.movies[0]}`;
console.log(about);

// arrow function 
const getF = () => 55;
const add = num => num + 5;
const isEven = x => x % 2 == 0;
const addThree = (num1, num2, num3) => num1 + num2 + num3;
// multi line
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
console.log(getF());

// spread operator
