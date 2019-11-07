//OBJECT
let mybook = {
    title: "1984",
    author: "Goerge Orwell",
    pageCount: 326
};
console.log(`${mybook.title} by ${mybook.author}`);
mybook.title = "Animal Farm";
console.log(`${mybook.title} by ${mybook.author}`);

//object as function argument
let getSummary = function (book) {
    console.log(`${book.title} by ${book.author}`);
}
getSummary(mybook);


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


//as function return value
let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}
let temps = convertFahrenheit(74);
console.log(temps);

//sub-namespaces (nested object)
let ppl = {
    name: {
        first: "Bob",
        last: "Smith"
    },
    age: 32
};
console.log(ppl.name.first); //Bob

//setters
ppl.age = 45;
ppl.name.last = "Cratchit";
console.log(ppl);

//adding new properties, methods to object
ppl.eyes = "green";
ppl.farewell = function () {
    console.log("Bye everybody!");
};
ppl.farewell();

console.log("*************************************************")
//in
let car = {
    make: "Honda",
    model: "Accord",
    year: 1998
};
console.log("make" in car); //true

//delete
delete ppl.eyes;
console.log(ppl.eyes); //undefined (deleted)
console.log(ppl.ears); //undefined (was never created)

//for...in
let string = "";
let object = {
    a: 1,
    b: 2,
    c: 3
};
for (let property in object) {
    string += object[property];
    //    console.log(property); //a \n b \n c
}
console.log(string); //123

console.log("*************************************************")
//CONSTRUCTOR
function Student(name, gender) {
    this.name = name; //"John";
    this.gender = gender; //"Male";
    this.sayHi = function () {
        console.log("Hi!");
    }
}
var student1 = new Student("Nancy", "female");
console.log(student1.name);
console.log(student1.gender);
student1.sayHi();

//keys()
console.log(Object.keys(student1).toString()); //name,gender,sayHi (return type Array)

//getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(student1, "name")); //return type object {value: "Nancy", writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(student1, "sayHi"));

//add new properties
student1.age = 20;
console.log(student1.age); //20
var student2 = new Student("John", "male");
console.log(student2.age); // undefined

console.log(student1); //[object Object]{age: 20, gender: "female", name: "Nancy", sayHi: f()}
console.log(student2); //[object Object]{gender: "male", name: "John", sayHi: f()}

//Prototype is an object
Student.prototype.age = 15;
console.log(student1); //no change in object printout
console.log(student2); //no change in object printout
console.log(student1.age); // 20
console.log(student2.age); // 15

delete Student.prototype.age;
console.log(student1.age); //20
console.log(student2.age); // undefined

console.log("*************************************************")
//DATE OBJECT
let start = new Date();
let end = new Date();
let elapsed = end.getTime() - start.getTime();
console.log(elapsed);

let now = new Date();
console.log(now.getDate()); //23
console.log(now.getDay()); //3
console.log(now.getMonth()); //9 (month index)
console.log(now.getFullYear()); //2019
console.log(now.getTime()); // 1571844085488
console.log(now.getMilliseconds()); //488
console.log(now.getSeconds()); //25
console.log(now.getMinutes()); //22
console.log(now.getHours()); //18
console.log(now.getUTCHours()); //15
console.log(now.getTimezoneOffset()); //-180
console.log(now.getYear()); //119
console.log(now.getUTCHours()); //15

let testdate = new Date(2000, 4, 3, 15, 5);
console.log(testdate.getFullYear()); //2000
console.log(testdate.getDate()); //3
console.log(testdate.getMonth()); //4
console.log(testdate.getDay()); //3
