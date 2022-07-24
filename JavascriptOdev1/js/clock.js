const getname = prompt("Please enter your name");

const name = document.getElementById("myName").innerHTML=getname;

function showTime(){
    const weekDay = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    const t = new Date();
    let time=t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + " " + weekDay[t.getDay()];
    document.getElementById("myClock").innerHTML=time;
}
showTime();

function showMessage(){
    const name = document.getElementById("myName").innerHTML=getname;

    alert(`Umarım yılmadan, pes etmeden devam edebiliriz :(\n ${name} `);
}