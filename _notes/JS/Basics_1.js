//STRINGS
let a = 'ann';
let b = "dave";
console.log(a + ' ' + b);

console.log(a.length);
console.log(b.toUpperCase());
console.log(b.indexOf('g'));
console.log(b.charAt(1));
console.log(a > b);
console.log(a <= b);

//BOOLEAN

let c = true;
let d = false;

console.log(c && d);
console.log(c || d);
console.log(!d);
console.log(c === d);
console.log(c !== d);

//NUMBERS
//-Nan
console.log(0 / 0.0);
//-Infinity
console.log(10.0 / 0);

//UNDEFINED
let e;
console.log(e);

//NULL
let f = null;
console.log(f);

//DATA TYPE CONVERSION
let g = "33";
let h = 5;
console.log(g - h);
console.log(g * h);
console.log(g / h);
console.log(g + h);

//MATH OBJECT
let num1 = -2;
let num2 = 3;
console.log(Math.abs(num1));
console.log(Math.abs(num1, num2));
console.log(Math.sqrt(num1));
console.log(Math.floor(Math.random() * 10) + 1);

//THRUTHY & FALSY
let name;

if (name) {
    console.log("Defined");
} else {
    console.log("Undefined");
}

let number = 0; //Falsy

if (number) {
    console.log("Defined");
} else {
    console.log("Undefined");
}

let text = "0"; //TRUTHY

if (text) {
    console.log("Defined");
} else {
    console.log("Undefined");
}

let count = 0; //"Defined"

if (count || count === 0) {
    console.log("Defined");
} else {
    console.log("Undefined");
}

//TERNARY IF
let age1 = 20;
let canDrinkAlcohol = (age1 >= 21) ? "True, over 21" : "False, under 21";
console.log(canDrinkAlcohol);

//var stop = false,
//    age2 = 23;
//age2 > 18 ? (
//    alert("OK, you can go.")
//) : (
//    stop = true,
//    alert("Sorry, you are much too young!")
//);

//LOOPS
for (let i = 0; i < 3; i++) {
    console.log(i);
}

let j = 11;
while (j < 13) {
    console.log(j);
    j++;
}
