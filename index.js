"Use strict";

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEL = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleBtn = document.querySelector('.toggle');

// dark and light mode

toggleBtn.addEventListener("click", (e) =>{
    const html = document.querySelector("html");

    if(html.classList.contains("dark")){
        html.classList.remove("dark");
        e.target.innerHTML = " Dark Mode";
    } else{
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode";
    }
});

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday"
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock,
        0, 
        12, 
        0, 
        360,
        )}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute,
        0, 
        60, 
        0, 
        360,
        )}deg)`;

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,
        0, 
        60, 
        0, 
        360,
        )}deg)`;

    timeEL.innerHTML = `${hoursForClock}:${minute < 10 ? `0${minute}` : minute}${ampm}`;
}



const scale = (num, in_min, in_max, out_min, out_max) =>{
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();
setInterval(setTime, 1000);