
document.forms[0].addEventListener("submit", function (e) {
    e.preventDefault();
    var resultValue = parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);

    document.getElementById("result").textContent = "Result is " + resultValue;

})

