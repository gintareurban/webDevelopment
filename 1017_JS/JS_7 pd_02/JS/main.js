var balance = 0;
var transaction_log = [];
var parent = document.getElementById("list");


document.forms[0].addEventListener("submit", function (e) {

    e.preventDefault();

    let selector = document.getElementById("select_action");

    let action_value = selector[selector.selectedIndex].value;

    let amount = parseFloat(document.getElementById("inputAmount").value);

    //check if action is selected and if balance is sufficient for  withdrawal
    if (action_value === "0") {
        alert("Please choose an action");
    } else if (action_value === "1") {
        balance += amount;
        log(new Transaction(amount, action_value, balance));
    } else if (action_value === "2") {
        if (balance < amount) {
            alert("Insufficient funds");
        } else {
            balance -= amount;
            log(new Transaction(amount, action_value, balance));
        }
    }

    let amount_msg = document.getElementById("amount");

    amount_msg.textContent = `${balance.toFixed(2)}`;

});

// Show statement button setup
document.getElementById("btn_statement").addEventListener("click", function () {
    displayArray(transaction_log);

    document.getElementById("statement").style.display = "block";
    document.getElementById("filter_section").style.display = "block";
    document.getElementById("sort_section").style.display = "block";
})


document.getElementById("filter_form").addEventListener("submit", function (e) {
    e.preventDefault();

    let filterFrom = parseFloat(document.getElementById("filter_from").value);
    let filterTo = parseFloat(document.getElementById("filter_to").value);

    let filter_log = transaction_log.filter(item => (item.amount >= filterFrom) && (item.amount <= filterTo));

    displayArray(filter_log);

})

document.getElementById("btn_sort").addEventListener("click", function (e) {
    e.preventDefault();

    let sorted_log = transaction_log.sort((a, b) => (a.amount > b.amount) ? 1 : -1);

    displayArray(sorted_log);

})

function displayArray(array) {
    //clear display
    parent.querySelectorAll('*').forEach(child => child.remove());

    array.forEach(function (item, index) {
        let row = document.createElement("tr");
        //#
        let column1 = document.createElement("th");
        column1.textContent = index + 1;
        //Date
        let column2 = document.createElement("td");
        column2.textContent = item.date.toLocaleString();

        // Amount
        let column3 = document.createElement("td");
        column3.textContent = item.amount.toFixed(2);
        if (item.action_value === "2") {
            column3.style.color = "red";
        } else {
            column3.style.color = "green";
        }
        // Balance
        let column4 = document.createElement("td");
        column4.textContent = item.balance.toFixed(2);

        parent.appendChild(row);
        row.appendChild(column1);
        row.appendChild(column2);
        row.appendChild(column3);
        row.appendChild(column4);
    })
}

function Transaction(amount, action_value, balance) {
    this.amount = amount;
    this.action_value = action_value;
    this.balance = balance;
    this.date = new Date();
}


function log(transaction) {
    transaction_log.push(transaction);
}
