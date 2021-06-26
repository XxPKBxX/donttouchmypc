function detect(e) {
    if (!((e.clientX > x + 10 || e.clientX < x - 10) || (e.clientY > y + 10 || e.clientY < y - 10))) return;

    let gmail = document.querySelector("#gmail");
    if (gmail.innerText !== "Gmail") return;

    gmail.innerText = "Email";
    addlog("Mouse has been moved!");
}

function mouseout() {addlog("Mouse is out of the page.");}
function mousein() {addlog("Mouse is back in the page.");}