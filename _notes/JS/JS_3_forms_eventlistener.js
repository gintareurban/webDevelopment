var btn = document.querySelector("#btn1");

btn.addEventListener("click", function () {
    btn.textContent = "Done";
});

//OLD way for defining functions
//var btn2 = document.querySelector("#btn1");
//
//function changeText() {
//    btn2.textContent = "Done";
//}
//
//btn2.addEventListener("click", changeText);


//FOCUS & BLUR
let input = document.querySelector("input");

input.addEventListener("focus", function () {
    input.style.background = "pink";
})

input.addEventListener("blur", function () {
    input.style.background = "lightgray";
})

//MOUSEOVER & MOUSEOUT

let p = document.querySelector("p");

p.addEventListener("mouseover", function () {
    p.style.background = "lightgray";
})

p.addEventListener("mouseout", function () {
    p.style.background = "lightyellow";
})

//SELECT
document.getElementById("btn").addEventListener("click", function () {
    let selector = document.getElementById("select_1");
    console.log(selector);
    let value = selector[selector.selectedIndex].text;
    document.getElementById("display").textContent = value;
});

//FORMS

let form = document.querySelector("#registration");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.elements.firstname.value);
    console.log(e.target.elements.lastname.value);
})

//let form1 = document.forms["reg"];
 //let firstname = form1["firstname"].value;
 //let lastname = form1["lastname"].value;
 //console.log(`First name: ${firstname}, Surname:  ${lastname}`);
