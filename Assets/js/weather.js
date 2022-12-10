let weather = {
    apiKey: "8767292ff2d49f8b711c0679b1936ed2",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/04d.png" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
    }

}
























// function success(data) {
//     var api_key = '8767292ff2d49f8b711c0679b1936ed2';


//     var api_url = 'https://api.opencagedata.com/geocode/v1/json'

//     var request_url = api_url
//         + '?'
//         + 'key=' + api_key
//         + '&q=' + encodeURIComponent(latitude + ',' + longitude)
//         + '&pretty=1'
//         + '&no_annotations=1';

//     // see full list of required and optional parameters:
//     // https://opencagedata.com/api#forward

//     var request = new XMLHttpRequest();
//     request.open('GET', request_url, true);

//     request.onload = function () {
//         // see full list of possible response codes:
//         // https://opencagedata.com/api#codes

//         if (request.status === 200) {
//             // Success!
//             var data = JSON.parse(request.responseText);
//             console.log(data.results[0].components.city); // print the location
//             //weather.fetchWeather();
//         } else if (request.status <= 500) {
//             // We reached our target server, but it returned an error

//             console.log("unable to geocode! Response code: " + request.status);
//             var data = JSON.parse(request.responseText);
//             console.log('error msg: ' + data.status.message);
//         } else {
//             console.log("server error");
//         }
//     };

//     request.onerror = function () {
//         // There was a connection error of some sort
//         console.log("unable to connect to server");
//     };

//     request.send();  // make the request
// }
// navigator.geolocation.getCurrentPosition(success, console.error)
// getLocation: function () {
//     function success(data) {
//         geocode.reverseGeocode(data.coords.latitude, data.coords.longitude);
//     }
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(success, console.error);
//     }
//     else {
//         weather.fetchWeather("New York");
//     }
// }


// document.querySelector(".search button").addEventListener("click", function () {
//     weather.search();
// });

// document
//     .querySelector(".search-bar")
//     .addEventListener("keyup", function (event) {
//         if (event.key == "Enter") {
//             weather.search();
//         }
//     });

// geocode.getLocation();