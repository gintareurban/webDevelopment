let li = document.querySelector("li");
console.log(li);
let li2 = li.nextElementSibling;
console.log(li2);
let li3 = li.nextElementSibling.nextElementSibling;
console.log(li3);

let parent = document.querySelector("li").parentElement;
console.log(parent);
let litwo = li3.previousElementSibling;
console.log(litwo);

let ul = document.getElementsByTagName("ul");
let firstChild = ul[0].firstElementChild;
let lastChild = ul[0].lastElementChild;
console.log(firstChild);
console.log(lastChild);

lastChild.textContent = "Linkas3";

let img = document.querySelector("img");
let hasAtt = img.hasAttribute("src");
let getAtt = img.getAttribute("src");
img.setAttribute("alt", "photo");
img.style.width = "100px";
console.log(img);
//true
console.log(hasAtt);
//soursepath = IMG/alimeter.jpg
console.log(getAtt);


//APPEND ELEMENT
let newImg = document.createElement("img");
newImg.setAttribute("src", "../IMG/alimeter.jpg");
newImg.setAttribute("alt", "new_alimeter");

let parentBody = document.querySelector("body");
parentBody.appendChild(newImg);
newImg.style.display = "block";

//CREATE ELEMENT
let newH3 = document.createElement("h3");
newH3.textContent = "New heading";

let parentForH3 = document.querySelector("body");
let beforeElement = document.querySelector("ul");
parentForH3.insertBefore(newH3, beforeElement);

//FUNCTIONS
let p = document.querySelector("p");
p.addEventListener("click", function () {
    p.style.color = "red";
})
