let first = document.getElementById("first");
let second = document.getElementById("second");

first.addEventListener("mouseenter", function(e) {
    event.target.style.color = "purple";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);


first.addEventListener("mouseover", function() {
    event.target.style.color = "orange";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

second.addEventListener("mouseenter", function(e) {
    event.target.style.color = "purple";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);


second.addEventListener("mouseover", function() {
    event.target.style.color = "orange";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);