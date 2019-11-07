let img = document.querySelector("img");

let button1 = document.querySelector("button");

button1.addEventListener("click", function(){
    img.setAttribute("class", "")
    img.classList.add("big");
})


let button2 = button1.nextElementSibling;

button2.addEventListener("click", function(){
    img.setAttribute("class", "")
    img.classList.add("small");
})



