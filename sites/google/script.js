let searchinput, clearicon, startx, starty, x, y;

function load() {
    searchinput = document.querySelector(".sec#search #searchinput");
    clearicon = document.querySelector(".sec#search #clearicon");

    searchinput.addEventListener("keyup", clear, false);
    searchinput.addEventListener("keydown", clear, false);
    clearicon.addEventListener("click", remove, false);

    document.querySelector(".popup #start").addEventListener("click", start, false);
    document.addEventListener("mousemove", mousemove, true);
}

function clear() {
    if (searchinput.value.length > 0) {clearicon.classList.add("shown");searchinput.classList.add("shown");}
    else {clearicon.classList.remove("shown");searchinput.classList.remove("shown");}
}

function remove() {
    searchinput.value = "";
    clear();
}

function mousemove(e) {
    x = e.clientX;
    y = e.clientY;
}

function start() {
    let popup = document.querySelector(".popup");
    let dialog = document.querySelector(".dialog");
    let countdown = document.querySelector("#countdown");

    dialog.classList.add("hidden");
    popup.classList.add("hidden");
    setTimeout(function(){popup.remove();},400,false);

    countdown.classList.add("count");
    for (let i = 0; i < 4; i++) {
        setTimeout(function() {
            if (i === 3) {
                startx = x;
                starty = y;
                document.removeEventListener("mousemove", mousemove, true);
                countdown.classList.remove("count");
                setTimeout(function(){countdown.remove();},400,false);
                
                document.addEventListener("mousemove", detect, true);
                document.addEventListener("mouseleave", mouseout, false);
                document.addEventListener("mouseenter", mousein, false);
                document.addEventListener("keyup", logcheck, true);
                document.querySelector(".logpopup #close").addEventListener("click", dialogtoggle, false);
            }
            else countdown.innerText = (3 - i).toString();
        }, (i) * 1000, false);
    }
}

function addlog(text) {
    let nothing = document.querySelector(".logpopup #nothing");
    if (nothing) nothing.remove();
    
    time = new Date();
    date = time.getHours().toString() + ":" + time.getMinutes().toString() + ":" + time.getSeconds().toString();

    toadd = document.createElement("span");
    toadd.classList.add("text");
    toadd.setAttribute("data-time", date);
    toadd.innerText = text;
    document.querySelector(".logpopup #list").appendChild(toadd);
}

window.addEventListener("load", load, false);