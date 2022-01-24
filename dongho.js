function showTime(){
    let date = new Date();
    let gio = date.getHours(); // 0 - 23
    let phut = date.getMinutes(); // 0 - 59
    let giay = date.getSeconds(); // 0 - 59
    let session = "AM";

    if(gio == 0){
        gio = 12;
    }

    if(gio > 12){
        gio = gio - 12;
        session = "PM";
    }

    gio = (gio < 10) ? "0" + gio : gio;
    phut = (phut < 10) ? "0" + phut : phut;
    giay = (giay < 10) ? "0" + giay : giay;

    let time = gio + ":" + phut + ":" + giay + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, );

}

showTime();