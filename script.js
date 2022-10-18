let limit=1
let info=document.getElementById("info")
let temp=document.getElementById("temp")
let iconTemp=document.getElementById("iconTemp")
let humidity=document.getElementById("humidity")
let windSpeed=document.getElementById("windSpeed")
let container=document.getElementById("container")
let nowhere=document.getElementById("nowhere-box")
const apiKey="b801b194a01c63c3e141671454d3e98c"
function sendResult(){
    let country=document.getElementById("inputText").value
    let maps=fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=${limit}&appid=${apiKey}`)
    maps.then(response=>response.json())
    .then(data=> {
        let lat=data[0].lat
        let lon=data[0].lon
        let weather=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        weather.then((response1)=>response1.json())
        .then((data)=>{
            temp.innerHTML=Math.round(data.main.temp-273.15)+"<span>&#8451;</span>"
            info.innerHTML=data.weather[0].main
            iconTemp.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            windSpeed.innerHTML=Math.round(data.wind.speed*18/5)+"Km/h"
            humidity.innerHTML=data.main.humidity+"%"
            container.classList.add("nice")
            nowhere.classList.add("hide")
        })
        .catch((err)=>{console.log(err)})
    })
    .catch((err)=>{container.classList.add("opps")
    container.classList.remove("nice")
            nowhere.classList.remove("hide")})
}