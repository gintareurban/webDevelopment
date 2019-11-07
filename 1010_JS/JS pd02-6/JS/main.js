let img1 = document.getElementsByTagName("img")[0];
let img2 = document.getElementsByTagName("img")[1];
//let p = document.getElementsByTagName("p")[1];


let button1 = document.querySelector("button");
//left
button1.addEventListener("click", function () {
    img1.setAttribute("class", "left");
    img2.setAttribute("class", "hide");
})

let button2 = button1.nextElementSibling;
//right
button2.addEventListener("click", function () {
    img1.setAttribute("class", "right");
    img2.setAttribute("class", "hide");
})

let button3 = button2.nextElementSibling;
//hide
button3.addEventListener("click", function () {
    img1.setAttribute("class", "hide");
    img2.setAttribute("class", "hide");
})

let button4 = button3.nextElementSibling;
//bottom
button4.addEventListener("click", function () {
    img1.setAttribute("class", "hide");
    img2.setAttribute("class", "show");
})


let button5 = button4.nextElementSibling;
//restore
button5.addEventListener("click", function () {
    img1.setAttribute("class", "show");
    img2.setAttribute("class", "hide");
})
