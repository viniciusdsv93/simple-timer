let mm = 0;
let ss = 0;

let timer;

function startTimer() {
    let currStatus = document.getElementById('time').getAttribute('status');
    if (currStatus == "enabled") {
        timer = setInterval(showTime, 1000);
        document.getElementById('time').setAttribute('status', 'disabled');
    }
}

function pauseTimer() {
    clearInterval(timer);
    document.getElementById('time').setAttribute('status', 'enabled');
}

function stopTimer() {
    clearInterval(timer);
    mm = 0;
    ss = 0;
    document.getElementById('time').innerHTML = "00:00";
    document.getElementById('time').setAttribute('status', 'enabled');
}

function showTime() {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;
    }

    let format = (mm < 10 ? '0' + mm : mm) + ":" + (ss < 10 ? '0' + ss : ss);
    document.getElementById('time').innerHTML = format;
}