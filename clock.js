var today;
var millisec;
var sec;
var minute;
var hour;
var year;
var month;
var date;
function time(){
     today = new Date();
     var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     year = today.getFullYear();
     month = 1 + today.getMonth();
     var m = months[month-1]
     date = today.getDate();
     sec = today.getSeconds();
     minute = today.getMinutes();
     hour = today.getHours();
     millisec = today.getMilliseconds();
     document.getElementById('digital').innerHTML = hour + " : " + minute + " : " + sec ;
     document.getElementById('date').innerHTML = date + " : " + month + " : " + year ;
     document.getElementById('mname').innerHTML = "(" + m + ")" ;
     var second = ((sec +(millisec/1000))/60) * 360 + 180;
     var min = ((minute + (sec / 60))/60) * 360 + 180;
     var hour1 = ((hour + (minute/60)) / 12) * 360 +180;
     document.getElementById('nid1').style.transform = 'rotate(' + second + 'deg)' ;
     document.getElementById('nid2').style.transform = 'rotate(' + min + 'deg)' ;
     document.getElementById('nid3').style.transform = 'rotate(' + hour1 + 'deg)' ;
}
setInterval(time);