
let hours =document.getElementById("hours")
let minutes =document.getElementById("minutes")
let seconds =document.getElementById("seconds")


setInterval(() => {
    let new_d = new Date();
    let h=new_d.getHours()
    let m=new_d.getMinutes()
    let s=new_d.getSeconds()

    if (h>12){
        h=h-12
        hours.innerText=h
        document.getElementById("period").innerText="PM:"
       

    }
    else{
         hours.innerText=h
        }
        
        minutes.innerText=m
        seconds.innerText=s


    
}, 1000);