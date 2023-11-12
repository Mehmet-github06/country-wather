const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");


search.addEventListener("click",()=>{
    const APIkey ="056a5d31c35a39c0d8ba3f4985e9e7ee";
    const city = document.querySelector(".search-box input").value;

    if ( city == ""){
        return ;
        fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}").then(response => response.json()).then(json => {

        const image = document.querySelector(".weather-box img");
        });
    }
});