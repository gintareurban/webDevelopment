var subjectArr = ["grandma", "neighbour", "dog"];
var actionArr = ["ate", "hid", "destroyed"];
var objectArr = ["books", "essay", "notes"];


var getElement = function (array) {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
}

var p = document.getElementById("answer");

document.querySelector("button").addEventListener("click", function () {
    let subject = getElement(subjectArr);

    switch (subject) {
        case "dog":
            document.querySelector("#back").style.backgroundImage = "url(../IMG/dog.jpg)";
            break;
        case "grandma":
            document.querySelector("#back").style.backgroundImage = "url(../IMG/grandma.jpg)";
            break;
        case "neighbour":
            document.querySelector("#back").style.backgroundImage = "url(../IMG/neighbour.jpg)";
            break;
    }

    let text = `My ${subject} ${getElement(actionArr)} my ${getElement(objectArr)} ...`;
    p.textContent = text;



})
