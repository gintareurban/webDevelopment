document.querySelector("button").addEventListener("click", function () {
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "list-group-item");

    newLi.textContent = document.getElementById("item_name").value;

    let parent = document.getElementById("list");
    parent.appendChild(newLi);
    

})
