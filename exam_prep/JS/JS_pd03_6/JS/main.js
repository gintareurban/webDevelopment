document.getElementById("btn").addEventListener("click", function () {

    let selector = document.getElementById("select_seasons");
    console.log(selector);

    let value = selector[selector.selectedIndex].value;
    console.log(value);


    switch (value) {
        case "1":
            document.body.style.backgroundImage = "url(../IMG/spring.png)";
            break;
        case "2":
            document.body.style.backgroundImage = "url(../IMG/summer.png)";
            break;
        case "3":
            document.body.style.backgroundImage = "url(../IMG/autumn.png)";
            break;
        case "4":
            document.body.style.backgroundImage = "url(../IMG/winter.png)";
            break;
        default:
            document.body.style.background = "lightblue";
            break;

    }

});
