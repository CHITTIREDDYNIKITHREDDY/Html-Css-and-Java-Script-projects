const text=document.getElementById("text")
const submit=document.getElementById("submit")
const temp=document.getElementById("temp")
const locatio=document.getElementById("location")
const weatherdesc=document.getElementById("weather-desc")
const bg=document.getElementById('myvideo')
submit.onclick=function (){
    if(text.value==""){
        alert("Enter Some Location")
    }
    else{
       
        const api_key = "b51655770ec598fdad222e950a7af607";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=${api_key}`;
    
        fetch(`${url}`).then(res=>res.json()).then(data=>{
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            locatio.innerText="temperature at "+name;
            let degree = Math.floor(feels_like-273);
            temp.innerText=degree+" °C";
            weatherdesc.innerText=description; 

            
            const str = description;
            if(str.includes("cloud")==true && degree>=30){ bg.setAttribute('src',"assects/cloudy16.mp4");}
            else if(str.includes("thunder")==true ){ bg.setAttribute('src',"assects/thunders.mp4");}
            else if(str.includes("scattered clouds")==true ){ bg.setAttribute('src',"assects/thunders.mp4");}
            else if(str.includes("cloudy")==true){ bg.setAttribute('src',"assects/cloudy.mp4");}
            else if(str.includes("haze")==true && degree<=10){ bg.setAttribute('src',"assects/haze.mp4");}
            else if(str.includes("haze")==true && degree<=20){ bg.setAttribute('src',"assects/haze15.mp4");}
            else if(str.includes("haze")==true && degree<=30){ bg.setAttribute('src',"assects/haze25.mp4");}
            else if(str.includes("haze")==true && degree>=30){ bg.setAttribute('src',"assects/haze30.mp4");}
            else if(str.includes("show")==true && degree>8){ bg.setAttribute('src',"assects/snow.mp4");}
            else if(str.includes("show")==true && degree>0){ bg.setAttribute('src',"assects/low.mp4");}
            else if(str.includes("rain")==true){ bg.setAttribute('src',"assects/raining.mp4");}
            else if(str.includes("rain")==true && degree<=30){ bg.setAttribute('src',"assects/rainy.mp4");}
            else if(str.includes("cloud")==true && degree<=30){ bg.setAttribute('src',"assects/cloudy16.mp4");}
            else if(str.includes("clear")==true ){ bg.setAttribute('src',"assects/clearsky.mp4");}
            else if(str.includes("sun")==true && degree>=30 ){ bg.setAttribute('src',"assects/sunny.mp4");}
            else if(str.includes("sun")==true && degree<=30 ){ bg.setAttribute('src',"assects/30.mp4");}
            else{bg.setAttribute('src','assects/normal.mp4');}


        }).catch(()=>{
            alert("Enter valid location")
            })
            text.value=""

           
        
        
}

}


