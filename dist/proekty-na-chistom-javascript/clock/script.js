console.info('Script.js vas successfully activated!')
//Clock
function clock () {
    var date = new Date;
     hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.querySelector('.hours.clockC').innerHTML = hours;
    document.querySelector('.minutes.clockC').innerHTML = minutes;
    document.querySelector('.seconds.clockC').innerHTML = seconds;
}
clock();
var clocFunc = setInterval(clock, 1000)
//Timer
function timer (toDate) {
    var today = new Date
    var finish_date = new Date (toDate)
    var diff = finish_date - today
    if(finish_date > today) {
 var day = parseInt(diff/(60*60*1000*24));
// day = day.toString();
 var hour = parseInt(diff/(60*60*1000))%24;
 if(hour < 10) {
 hour = '0' + hour;
 }
 //hour = hour.toString();

 var min = parseInt(diff/(1000*60))%60;
 if(min < 10) {
 min = '0' + min;
 }
 //min = min.toString();
 var sec = parseInt(diff/1000)%60;
 if(sec < 10) {
 sec = '0' + sec;
 }
 //sec = sec.toString();
 } else {
     var day = '0'
     var min = '00'
     var hour = '00'
     var sec = '00'
 }

 document.getElementById('timerDays').innerHTML = day
 document.getElementById('timerHours').innerHTML = hour
 document.getElementById('timerMinutes').innerHTML = min
 document.getElementById('timerSeconds').innerHTML = sec
}
timer("Apr 1,2019 00:00")
setInterval(timer, 1000, "Apr 1,2019 00:00")