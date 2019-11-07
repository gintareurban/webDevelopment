//FUNCTIONS
//default arguments
let getScoceText = function (name = "Anonymous", score = 0) {
    return "Name: " + name + " - Score: " + score;
};

let scoreText1 = getScoceText();
console.log(scoreText1);
let scoreText2 = getScoceText("Tom", 33);
console.log(scoreText2);
let scoreText3 = getScoceText(undefined, score = 99);
console.log(scoreText3);

//arguments object
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(add(1, 56, "2"));

//Arrow function
let arr = [1, 2, 3];
let squares1 = arr.map(function (x) {
    return x * x;
});
let squares2 = arr.map(x => x * x);
console.log(squares2);

//Callback functions
let friends = ["Mike", "Stacy", "Andy", "Rick"];
friends.forEach(function (eachname, index) {
    console.log(index + 1 + ". " + eachname);
})

//Undefined
//for variable
let name;
//name = "jen";
if (name === undefined) {
    console.log("please provide a name")
} else {
    console.log(name);
}

//function arguments
let square = function (num) {
    console.log(num);
}
square();

//return default value
let square1 = function (num) {
    console.log(num);
}
let result = square1();
console.log(result);

//Hoisting
console.log(Add); //undefined
//console.log(Add(5, 5)); //error:Add is not a function

var Add = function (val1, val2) {
    return val1 + val2;
}

testVar = 10;
console.log(testVar); //10

for (i = 0; i < 2; i++) {
    console.log(i + 1); //1 \n 2
}

//Variable shadowing
let name11 = "Tom";

if (true) {
    let name11 = "Mark";
    if (true) {
        name11 = "Bob";
    }
}
console.log(name11); //Tom
if (true) {
    name11 = "John";
}
console.log(name11); //John

////////
//let name12 = "Tom";

if (true) {
    //    let name12 = "Mark";
    if (true) {
        name12 = "Bob";
    }
}

if (true) {
    console.log(name12); //Bob
}
console.log(name12); //Bob
