//// 1 būdas (gauti formą)
//var form1 = document.forms;
//console.log("Kaip masyvas")
//console.log(form1);
//console.log("Pirma forma dokumente");
//console.log(form1[0]);

//// 2 būdas (gauti formą)
//var form1 = document.forms[0];
//console.log("Pirma forma dokumente");
//console.log(form1);
//
//// Gauti duomenis
//for(var i=0; form1.length; i++){
//// console.log(form1[i].type);
//// console.log(form1[i].name);
// console.log(form1[i].value);
//// console.log(form1[i].classList);
//}
//

// 3 būdas (gauti formą ir gauti duomenis iš formos)
document.querySelector("#myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.elements.name.value);
    console.log(e.target.elements.lastName.value);
});
