// truthy, false Ternary operator, shortcut and or

const money = 120;
const myVar = 120;

// ternary operator (if else shortcut)

let food = money > 100 ? 'biryani' : 'cha';
console.log(food);

let food1 = (money > 100 && myVar > 100) ? 'water' : 'pani';
console.log(food1);

// string to number (only using + sign)
const input = '500';
const inputNum = +input;
console.log(inputNum);

// truthy & falsy
const isActive = true;
const showUser = () => console.log('display user');
const showNumber = () => console.log('Number');
isActive ? showUser() : showNumber();
