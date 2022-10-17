let limit=1
const apiKey="b801b194a01c63c3e141671454d3e98c"
function sendResult(){
    let country=document.getElementById("inputText").value
    let maps=fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=${limit}&appid=${apiKey}`)
    maps.then(response=>response.json()).then(data=> {
        let lat=data[0].lat
        let lon=data[0].lon
        let weather=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        weather.then((response1)=>response1.json()).then((data)=>console.log(data.main.temp)).catch((err)=>{console.log(err)})
    }).catch((err)=>{console.log(err)})
}