let hrs=document.querySelector("#hrs");
let mins=document.querySelector("#mins");
let secs=document.querySelector("#secs");


setInterval(()=>{
    let time = new Date();
    hrs.innerHTML=(time.getHours()<10?"0":"")+time.getHours();
    mins.innerHTML=(time.getMinutes()<10?"0":"")+time.getMinutes();
    secs.innerHTML=(time.getSeconds()<10?"0":"")+time.getSeconds();
},1000)


