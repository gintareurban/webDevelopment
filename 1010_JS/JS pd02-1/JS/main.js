let p = document.querySelector("p");

let button1 = document.querySelector("button");

button1.addEventListener("click", function () {
    //    p.style.color = "yellow";

    //    p.setAttribute("class", "")
    p.classList.add("geltona");
})


let button2 = button1.nextElementSibling;

button2.addEventListener("click", function () {
    //    p.style.color = "green";

    //    p.setAttribute("class", "")
    p.classList.add("zalia");
})

let button3 = button2.nextElementSibling;

button3.addEventListener("click", function () {
    //    p.style.color = "red";

    //    p.setAttribute("class", "")
    p.classList.add("raudona");
})
