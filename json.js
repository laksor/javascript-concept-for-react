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

