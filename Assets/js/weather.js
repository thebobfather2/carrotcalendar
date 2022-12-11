//OpenWeather API
let apiKey = "3ac6363dc78f88939a4f094f585898ad";
let scity = document.querySelector("#scity").value;
var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + scity + "&appid=" + apiKey + "&units=metric"

function weatherData() {
    //let weather =
        fetch(weatherAPI)
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.")
                }
                return response.json();
                })

                .then((data) => displayWeather(data));
            }

            function displayWeather(data) {
                document.querySelector("#city").innerHTML = data.name;
                document.querySelector("#temperature").innerHTML = data.main.temp;
                document.querySelector("#humidity").innerHTML = data.main.humidity;
                document.querySelector("#wind").innerHTML = data.wind.speed;
                console.log(data);
            }
    

//             .then((data) => this.displayWeather(data))
    
//         displayWeather: function (data) {
//             const { name } = data
//                     const { icon, description } = data.weather[0]
//                     const { temp } = data.main;
//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".icon").src =
//         "https://openweathermap.org/img/wn/04d.png" + icon + ".png";
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".temp").innerText = temp + "°C";
// }



























