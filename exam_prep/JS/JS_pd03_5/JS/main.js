let inputName = document.getElementById("name");
let inputLastname = document.getElementById("lastname");



inputName.addEventListener("focus", function () {
    inputName.style.background = "pink";
})

inputName.addEventListener("blur", function () {
    inputName.style.background = "white";
})

inputLastname.addEventListener("focus", function () {
    inputLastname.style.background = "lightblue";
})

inputLastname.addEventListener("blur", function () {
    inputLastname.style.background = "white";
})
