let friends = ["Mike", "Stacy", "Andy", "Rick"];

//long way
//friends.forEach(function (eachName, index) {
//    console.log(index + 1 + ". " + eachName);
//});

//short way
friends.forEach((eachName, index) => console.log(`${index + 1}. ${eachName}`));
