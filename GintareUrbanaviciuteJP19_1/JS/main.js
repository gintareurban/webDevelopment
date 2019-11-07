//object constructor
function Dancer(firstname, lastname, age_group, dance_name, music_url) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age_group = age_group;
    this.dance_name = dance_name;
    this.music_url = music_url;
}

//create and assign instances
var dancers = [
    new Dancer("Margarita", "Bum", "13-18", "street", "https://www.youtube.com/watch?v=1il3RFk5Okw&list=RD1il3RFk5Okw&start_radio=1"),
    new Dancer("Peter", "Smith", "25-30", "hiphop", "https://www.youtube.com/watch?v=ghb6eDopW8I&list=RD1il3RFk5Okw&index=11"),
    new Dancer("Ben", "Bell", "41 and more", "ballet", "https://www.youtube.com/watch?v=CVUOTzoVeZA&list=RD1il3RFk5Okw&index=9")];


//search_form implementation

document.getElementById("search_form").addEventListener("submit", function (e) {
    e.preventDefault();

    let dance_name = document.getElementById("search_form_name").value;
    //clear enterred date form fields
    document.getElementById("search_form_name").value = "";

    let dancer = findDance(dance_name);

    if (dancer && dancer !== "null" && dancer !== "undefined") {
        alert(`Dancer: ${dancer.firstname} ${dancer.lastname}\nAge group: ${dancer.age_group} \nMusic URL : ${dancer.music_url}`);
    } else {
        alert("Sorry, we have no information about the given dance");
    }
})
// method to find dancer object by dance name given
var findDance = function (danceName) {
    let dance;
    for (let i in dancers) {
        if (dancers[i].dance_name === danceName) {
            dance = dancers[i];
            break;
        }
    }
    return dance;
}

//registration_form implementation
document.getElementById("registration_form").addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("test");
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let age = document.getElementById("age_group_select").value;
    let danceName = document.getElementById("performance_name").value;
    let music = document.getElementById("music_url").value;

    let new_dancers_length = dancers.push(new Dancer(firstname, lastname, age, danceName, music));

    //clear enterred date form fields
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("age_group_select").value = "13-18";
    document.getElementById("performance_name").value = "";
    document.getElementById("music_url").value = "";

    if (new_dancers_length) {
        alert("Your registration was successfull!");
    } else {
        alert("Resgistration failed, please try again");
    }
})
