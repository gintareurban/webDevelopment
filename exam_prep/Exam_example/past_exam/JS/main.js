var flights = [
    new Flight("ted@yahoo.com", "111111", "Vilnius", "Berlin"),
    new Flight("ann@gmail.com", "222222", "Dublin", "Moscow"),
    new Flight("jim@gmail.com", "333333", "London", "Paris")];

function Flight(email_address, reg_code, from, to) {
    this.email_address = email_address;
    this.reg_code = reg_code;
    this.from = from;
    this.to = to;
}

document.getElementById("flight_form").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("inputEmail").value;
    let code = document.getElementById("code").value;

    let matched_flight = findFlight(email, code);

    if (matched_flight && matched_flight !== "null" && matched_flight !== "undefined") {
        alert(matched_flight.from + ' \u2708 ' + matched_flight.to);
    } else {
        alert("Please check your email and registration code.")
    }

})

var findFlight = function (email, code) {
    let filtered_flight = flights.filter(item => (item.email_address === email) && (item.reg_code === code));
    return filtered_flight[0];
}
