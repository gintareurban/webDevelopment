//1.	Tiesinis algoritmas. Parašykite programą nurodytam parų skaičiui išreikšti valandomis ir minutėmis.
var days = 10;
var hours = days * 24;
var min = hours * hours;
console.log(days + " days has " + hours + " hours " + min + " minutes");



//2.	Tiesinis algoritmas. Duotas realusis skaičius x. Parašykite programą, kuri apskaičiuotų y reikšmę pagal formulę y = 16x^4 + 2x. Naudoti Math object.
var x = 2;
var y = 16 * Math.pow(x, 4) + (2 * x);
console.log(y);


//3.	Sąlyginis sakinys. Patikrinkite ar skaičius lyginis ar nelyginis.
var input = 19;
if (input % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

//4.	Sąlyginis sakinys. Raskite didžiausią skaičių iš dviejų duotų. Išbandykite kelis būdus:
//a.	Sąlyginis sakinys
var num1 = 3;
var num2 = -6;
var maxNum;
if (num1 < num2){
  maxNum = num2;
} else {
  maxNum = num1;
}

console.log ("Maximum number is " + maxNum);

//b.	Ternary operator
var num1 = 3;
var num2 = 12;
var maxNum = (num1 < num2)? num2 : num1;

console.log ("Maximum number is " + maxNum);


//c.	Math object
var num1 = 3;
var num2 = 12;

console.log ("Maximum number is " + Math.max(num1,num2));


//5.	Sąlyginis sakinys. Pagal duotą taškų vertinimo lentelę, pateikti įvertinimą.

var points = 5;
var grade;
var fail;
if (points >= 50 && points <= 60) {
    grade = 5;

} else if (points >= 45 && points <= 49) {
    grade = 4;
} else if (points >= 40 && points <= 44) {
    grade = 3;
} else if (points >= 35 && points <= 39) {
    grade = 2;
} else if (points >= 30 && points <= 34) {
    grade = 1;
} else if (points >= 0 && points <= 29) {
    grade = "failed";
}
console.log(grade);

//6.	Sąlyginis sakinys. Apskaičiuokite kūno masės indeksą ir nurodykite reikšmę. 
//Pavyzdys: http://sveikas.lt/lt/kmi-skaiciuokle/#

var height = 168;
var weight = 50;
var kmi = weight / height / height * 10000;
console.log("kmi: " + kmi);
if (kmi < 18.5) {
    console.log("nepakankamas svoris");
} else if (kmi < 25 && kmi >= 18.5) {
    console.log("normalus svoris");
} else if (kmi >= 25 && kmi < 30) {
    console.log("antsvoris");
} else if (kmi >= 30) {
    console.log("nutukimas");
}


//7.	Variantų sakinys. Duomenys koduojami skaičiais. Saulėta – 1, lietinga – 2, vėjuota – 3, sniegas – 4. Parenkite programą, kuri įvedus kodą, atspausdintų jo reikšmę. 
var weatherCode = parseInt(prompt("Please enter a code for weather (must be 1 to 4 inclusive): "), 10);
switch (weatherCode) {
    case 1:
        console.log("Sauleta");
        break;
    case 2:
        console.log("Lietinga");
        break;
    case 3:
        console.log("Vejuota");
        break;
    case 4:
        console.log("Sniegas");
        break;
    default:
        console.log("Invalid input");
        break;
}


//8.	Variantų sakinys. Parenkite programą, kuri įvedus mėnesio numerį metuose, nustatytų koks tai metų laikas: vasara, ruduo,  žiema,  pavasaris.
var monthCode = parseInt(prompt("Please enter a code for month (must be 1 to 12 inclusive): "), 10);
switch (monthCode) {
    case 1:
    case 2:
    case 12:
        console.log("Ziema");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Pavasaris");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Vasara");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Ruduo");
        break;
    default:
        console.log("Invalid input");
        break;
}



//9.	Cikliniai algoritmai. Atspausdinkite visus triženklius skaičius, kurie dalūs iš penkių.
for (var i = 100; i < 1000; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

//10.	Cikliniai algoritmai. Atspausdinkite visus skaičius iš intervalo [0, 100], bet jeigu skaičius dalosi iš 3, spausdinkite žodį Fizz, jeigu iš 5 – Buzz, jeigu ir iš 3 ir iš 5 – FizzBuzz.
for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

//11.	Cikliniai algoritmai. Apskaičiuokite funkcijos 1/x reikšmę intervale [-5; 5]. Dalyba iš nulio negalima, ją “apeikite”.

for (var i = -5; i <= 5; i++) {
    if (i === 0) {
        continue;
    } else {
        console.log("1/" + i + " = " + 1 / i);
    }
}


//12.	Cikliniai algoritmai. Raskite visų skaičių sumą iš nurodyto intervalo. Pvz.: intervalas [1; 5], tai skaičių suma intervale yra lygi 15.
var sum = 0;
var num1 = 1;
var num2 = 5;
var i = num2;

while (i >= num1) {
    sum += i;
    i--;
}
console.log(sum);
