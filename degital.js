
function updateTime(){
    let now = new Date();


    //hourse
    let hours = String(now.getHours()).padStart(2, "0");
    //minute
    let minutes = String(now.getMinutes()).padStart(2, "0");

    //secound
    let secounds = String(now.getSeconds()).padStart(2, "0");

    //class time by query selector
    const timeElement = document.querySelector('.time');
    timeElement.textContent = `${hours}:${minutes}:${secounds}`;


    //we add date or year for degital clock
    const date = now.getDate();
    const year = now.getFullYear();


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayofweek=[
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]

    const monthName = months[now.getMonth()];
    const dayName = dayofweek[now.getDay()];

    const dateElement = document.querySelector('.date');
    dateElement.textContent = `${dayName}, ${date}, ${monthName}, ${year}`;

}

updateTime()

setInterval(() => {
    updateTime()
}, 1000);


