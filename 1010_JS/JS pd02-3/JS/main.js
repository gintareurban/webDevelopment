let img = document.querySelector("img");

let button1 = document.querySelector("button");

button1.addEventListener("click", function(){
    img.setAttribute("src", "../IMG/htmllogo.jpg");
//    img.setAttribute("class", "");
//    img.classList.add("color");
})


let button2 = button1.nextElementSibling;

button2.addEventListener("click", function(){
    img.setAttribute("src", "../IMG/htmlgrey.jpg");
//    img.setAttribute("class", "");
//    img.classList.add("grey");
})



