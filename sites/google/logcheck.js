function logcheck(e) {
    if (e.keyCode === 51) dialogtoggle();
}

function dialogtoggle() {
    let logcheck = document.querySelector(".logdialog");
    let logpopup = document.querySelector(".logpopup");
    logcheck.classList.toggle("hidden");
    logpopup.classList.toggle("hidden");
}