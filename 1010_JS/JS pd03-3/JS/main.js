var weight;
var heightM;
var form1 = document.forms["bmi"];

document.forms[0].addEventListener("submit", function (e) {
    e.preventDefault();

    //    weight = parseFloat(document.getElementById("weightKg").value);
    weight = form1["weightKg"].value;

    heightM = parseFloat(document.getElementById("heightCm").value) / 100;

    console.log(weight + "   " + heightM);

    calculateBMI(weight, heightM);

})

function calculateBMI(weight, heightM) {
    var bmi = weight / Math.pow(heightM, 2);
    var warningMsg = document.getElementById("warning");
    var resultMsg = document.getElementById("result");
    var bmiCat;

    if (weight < 20 || weight > 200 || heightM < 0.5 || heightM > 2.5) {
        warningMsg.textContent = "Please double check your input values. They appear irregular."
    } else {
        warningMsg.textContent = "";
    }

    if (bmi < 18.5) {
        bmiCat = "Underweight";
    } else if (bmi < 25 && bmi >= 18.5) {
        bmiCat = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        bmiCat = "Overweight";
    } else if (bmi >= 30) {
        bmiCat = "Obesity";
    }

    resultMsg.textContent = "BMI is " + bmi.toFixed(2) + ". BMI category: " + bmiCat;

}
