document.getElementById('title').innerHTML="STOP WATCH"

let milliseconds=0,seconds=0,minutes=0,hours=0;
let timeref;
let display =document.getElementById('display')

document.getElementById('Start').onclick=function(){
    timeref=setInterval(updateTime,10)

}

function updateTime(){
    milliseconds=milliseconds +10;
    if(milliseconds==1000){
        seconds=seconds+1;
        milliseconds=0;
        if(seconds==60){
            minutes=minutes+1
            seconds=0;
            if(minutes==60){
                hours=hours+1;
                minutes=0;
            }

        }
    }

let h,m,s,ms;
if(hours<10){
    h='0'+hours
}
else{
    h=hours
}
if(minutes<10){
    m='0'+minutes
}
else{
    m=minutes
}
if(seconds<10){
    s='0'+seconds
}
else{
    s=seconds
}
if(milliseconds<10){
    ms='0'+milliseconds
}
else if(milliseconds<100){
    ms='00'+milliseconds
}
else{
    ms=milliseconds
}

display.innerHTML=`${h}: ${m}: ${s}: ${ms}`
}

document.getElementById("Stop").onclick=function(){
    clearInterval(timeref)

}

document.getElementById("Reset").onclick=function(){
    clearInterval(timeref)
    milliseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    display.innerHTML="00 : 00 : 00 : 00"   
}
