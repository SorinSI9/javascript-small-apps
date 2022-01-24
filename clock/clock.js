
    const hours = document.getElementById('number-hours');
    const minutes = document.getElementById('number-minutes');
    const seconds = document.getElementById('number-seconds');
    const ampm = document.getElementById('phase');

function afisareData() {

    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    if(h < 10) {
        h = "0" + h;
    }
    if(m < 10) {
        m = "0" + m;
    }
    if(s < 10) {
        s = "0" + s;
    }

    if(h < 12) {
        ampm.innerText = "AM";
    } else{
        ampm.innerText = "PM";
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
};

setInterval(afisareData, 1000);
