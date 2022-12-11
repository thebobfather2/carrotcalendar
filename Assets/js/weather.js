//OpenWeather API
function weatherData() {
    let apiKey = "3ac6363dc78f88939a4f094f585898ad";
    let scity = document.querySelector("#scity").value;

    var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + scity + "&appid=" + apiKey + "&units=metric"


    let weather =
        fetch(weatherAPI)
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.")
                    throw new Error("No weather found.");
                }
                return response.json();
            })

            .then((data) => displayWeather(data));



    function displayWeather(data) {
        document.querySelector("#city").textContent = data.name;
        document.querySelector("#temperature").textContent = data.main.temp;
        document.querySelector("#humidity").textContent = data.main.humidity;
        document.querySelector("#wind").textContent = data.wind.speed;
        console.log(data);
    }
}
weatherData();

