//FUNCTIONS
//Function declaration
console.log("test");

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 6));

//Function expression
var add1 = function (num1, num2) {
    return num1 + num2;
};
console.log(add1(5, 6));

let square = function (num) {
    let result = num * num;
    return result;
}
let value = square(3);
let othervalue = square(10);

console.log(value);
console.log(othervalue);


//let getTip = function (total, tipPercent = .2) {
//    let percent = tipPercent * 100;
//    let tip = total * tipPercent;
//    return `A ${percent}% tip on $${total} would be $${tip}`;
//}
//
//let tip = getTip(60);
//console.log(tip);


let getTip = function (total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`;
}

let tip = getTip(60);
console.log(tip);

//ARRAYS
let fruit = ["Apple", "Banana", "Pear"];
//to string, join
console.log(fruit.toString());
console.log(fruit.join(" *** "));
console.log(fruit.join(" "));

//concat
let num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];
let nums = num1.concat(num2, num3);
console.log(nums.toString());
console.log(num1.concat(num2, num3).toString());


//pop, push
console.log(fruit.pop());
console.log(fruit.toString());
console.log(fruit.push("Ananas"));
console.log(fruit.toString());

//shift, unshift
console.log(fruit.shift());
console.log(fruit.toString());
console.log(fruit.unshift("test1", "test2"));
console.log(fruit.toString());

//forEach
let fruits = ["Apple", "Banana", "Pear"];
fruits.forEach(function (item) {
    console.log(item);
});
fruits.forEach(function (item, index) {
    console.log(`${index} - ${item}`);
});
fruits.forEach(function (item, index, array) {
    console.log(array);
    console.log(`${index} - ${item}`);
});

//map()
let numbers = [1, 2, 3];
let newNumArr = numbers.map(function (item) {
    return item * 2;
});

let newNumArr2 = numbers.map(item => item * 3);
console.log(newNumArr.toString());
console.log(newNumArr2.toString());

//filter()
let words = ["spray", "limit", "elites", "exuberant", "destruction"];
const resultFilter = words.filter(function (word) {
    return word.length > 6;
})
console.log(resultFilter.toString());
const resultFilter2 = words.filter(word => word.length > 5);
console.log(resultFilter2.toString());

//OBJECT
let mybook = {
    title: "1984",
    author: "Goerge Orwell",
    pageCount: 326
};
console.log(`${mybook.title} by ${mybook.author}`);
mybook.title = "Animal Farm";
console.log(`${mybook.title} by ${mybook.author}`);

let person = {
    name: ["Bob", "Smith"],
    age: 32,
    gender: "male",
    interests: ["music", "skiing"],
    bio: function () {
        alert(this.name[0] + " " + this.name[1] + " is " + this.age + " years old. He likes " + this.interests[0] + " and " + this.interests[1]);
    },
    greeting: function () {
        alert(" Hi! I\'m " + this.name[0] + ".");
    }
};
//person.bio();
//person.greeting();
