const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hubli';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0af08b847bmsh83a0be3664afe0dp1e359cjsnef6efdc4c13f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getwether = (city)=>{
    cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=>response.json())
.then((response) => {
    console.log(response)
    
    temp.innerHTML =response.temp
    temp2.innerHTML =response.temp
    max_temp.innerHTML =response.max_temp
    min_temp.innerHTML =response.min_temp
     
    humidity.innerHTML =response.humidity
    humidity2.innerHTML =response.humidity
    cloud_pct.innerHTML = response.cloud_pct;
    feels_like.innerHTML = response.feels_like;
    
   
    wind_speed.innerHTML =response.wind_speed
    wind_speed2.innerHTML =response.wind_speed
    wind_degrees.innerHTML =response.wind_degrees
    // sunrise.innerHTML =response.sunrise
    // sunset.innerHTML =response.sunset

})
.catch(err=>console.log(err));
}
const getwetherTabel = (city)=>{
   
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=>response.json())
.then((response) => {
    console.log(response)
    
    tempT.innerHTML =response.temp
    max_tempT.innerHTML =response.max_temp
    min_tempT.innerHTML =response.min_temp
     
    humidityT.innerHTML =response.humidity
    
    wind_speedT.innerHTML =response.wind_speed
    wind_degreesT.innerHTML =response.wind_degrees

    cloud_pctT.innerHTML = response.cloud_pct;
    feels_likeT.innerHTML = response.feels_like;
    // sunrise.innerHTML =response.sunrise
    // sunset.innerHTML =response.sunset

})
.catch(err=>console.log(err));
}

submit.addEventListener("click",(e)=>{
   e.preventDefault();
   if(input.value===""){
    alert("Please enter the city name")
   }
   else
   getwether(input.value)
})
getwether("delhi")
getwetherTabel("bangalore")
getwetherTabel("mumbai")