const apiKey = "f6efcb33ebcc2602f9f6e5b820743df9";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        async function checkWeather(city)
        {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if(response.status==404)
            {
                document.querySelector(".error").style.display ="block";
                document.querySelector(".weather").style.display ="none";
            }
            else{
                var data = await response.json();


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

if(data.weather[0].main == "Clouds")
{
    weatherIcon.src = "./clouds.png";
}
else if(data.weather[0].main == "Clear")
{
    weatherIcon.src = "./clear.png";
}
else if(data.weather[0].main == "Rain")
{
    weatherIcon.src = "./rain.png";
}
else if(data.weather[0].main == "Drizzle")
{
    weatherIcon.src = "./drizzle.png";
}
else if(data.weather[0].main == "Mist")
{
    weatherIcon.src = "./mist.png";
}
document.querySelector(".weather").style.display ="block";
document.querySelector(".error").style.display ="none";
switch(data.weather[0].main)
{
    case "Clouds":
        document.getElementById("wrapper-bg").style.backgroundImage = "url(./cloudy.gif)";
        break;
    case "Clear":
        document.getElementById("wrapper-bg").style.backgroundImage = "url(./clear.gif)";
        break;
    case "Rain":
        document.getElementById("wrapper-bg").style.backgroundImage = "url(./giphy.gif)";
        break;
    case "Snow":
        document.getElementById("wrapper-bg").style.backgroundImage = "url(./snow.gif)";
        break;
    case "Drizzle":
        document.getElementById("wrapper-bg").style.backgroundImage = "url(./Drizzle.gif)";
        break;
    case "Mist":
        document.getElementById("wrapper-bg").style.backgroundImage = "url(./Mist.gif)";
        break;
    default: 
        document.getElementById("wrapper-bg").style.backgroundImage = "url(./)";
        break;
}
            }

        }
        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value); 
        })
