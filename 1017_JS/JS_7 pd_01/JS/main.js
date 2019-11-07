function Table(seats) {
    this.seats = seats;
    this.reserved = false;
    this.reservation_name;
}

function Restaurant() {
    this.name;
    this.tables = [];

    this.sort_tables = function () {
        let sorted_tables = this.tables.sort((a, b) => (a.seats > b.seats) ? 1 : -1);
        this.tables = sorted_tables;
    };

    this.checkFreeSpaces = function () {
        let free_spaces = 0;

        this.tables.forEach(function (item) {
            if (!item.reserved) {
                free_spaces += item.seats;
            }
        })
        return free_spaces;
    };

    this.reserve = function (seats, name) {
        this.sort_tables();
        let reserved_table;
        for (let i in this.tables) {
            if ((!this.tables[i].reserved) && (this.tables[i].seats >= seats)) {
                reserved_table = this.tables[i];
                this.tables[i].reserved = true;
                this.tables[i].reservation_name = name;
                break;
            }
        }
        return reserved_table;
    };

    this.cancel_reservation = function (name) {
        let cancelled = false;
        for (let i in this.tables) {
            if (this.tables[i].reservation_name === name) {
                this.tables[i].reserved = false;
                cancelled = true;
                break;
            }
        }
        return cancelled;
    }
}

//create restaurant object, add table abjects
var restaurant = new Restaurant();
restaurant.name = "The Star Inn";

//restaurant.tables = [new Table(4), new Table(2), new Table(3), new Table(4), new Table(5)];
restaurant.tables = [new Table(4), new Table(2)];

//show restaurant name
document.getElementById("name").textContent = restaurant.name;

//check free spaces
document.getElementById("check_free_spaces").addEventListener("click", function () {

    let free_seats_msg = document.getElementById("free_spaces");
    free_seats_msg.parentElement.style.display = "inline";

    let free_seats = restaurant.checkFreeSpaces();
    free_seats_msg.textContent = free_seats;

    if (free_seats > 0) {
        document.getElementById("reservation_form").style.display = "block";
    } else {
        document.getElementById("message").textContent = "We appologise, there are no seats available.";
    }
})

//reserve table
document.getElementById("reservation_form").addEventListener("submit", function (e) {
    e.preventDefault();

    let reservation_name = document.getElementById("reservation_name").value;
    let reservation_seats = parseInt(document.getElementById("seats_reserved").value);

    let table = restaurant.reserve(reservation_seats, reservation_name);

    if (table && table !== "null" && table !== "undefined") {
        document.getElementById("reservation_message").textContent = `Your reservation has been successful : reservation name - ${table.reservation_name}, reserved table capacity - ${table.seats}`;
    } else {
        document.getElementById("reservation_message").textContent = "We appologise, there are not enough seats available. Try reserving fewer seats.";
    }
})

//cancel reservation
document.getElementById("cancel_btn").addEventListener("click", function () {
    document.getElementById("cancelation_form").style.display = "block";
})

document.getElementById("cancelation_form").addEventListener("submit", function (e) {
    e.preventDefault();

    let cancelation_name = document.getElementById("cancelation_name").value;

    if (restaurant.cancel_reservation(cancelation_name)) {
        document.getElementById("cancelation_message").textContent = "Your reservation was successfully cancelled";
    } else {
        document.getElementById("cancelation_message").textContent = "We cannot find a reservation under a given name. Please check the reservation name";
    }

})
