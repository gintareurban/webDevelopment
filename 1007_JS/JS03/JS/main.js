function geltona(){
    var p = document.getElementById("top");
//    p.style.color = "yellow"; 
    p.setAttribute("class", "geltona");
//    p.classList.add("geltona");  // check why color does not work: red and green are not invoked after red
}

function zalia(){
    var p = document.getElementById("top");
//    p.style.color = "green";
     p.setAttribute("class", "zalia");
//    p.classList.add("zalia");
}

function raudona(){
    var p = document.getElementById("top");
//    p.style.color = "red";
     p.setAttribute("class", "raudona");
//    p.classList.add("raudona");
}