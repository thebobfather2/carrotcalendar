
// const timezoneDiv = document.getElementById('#timezone')
// const country = document.getElementById('country')
// let city = "America/New_York"
var value;


//fetching the timezone api
const timezone = (city) => {
    // event.preventDefault()
    var timezoneApi = "http://worldtimeapi.org/api/timezone/" + city 

    fetch(timezoneApi)
        //storing the response, then pulling the datetime to display
        .then(response => response.json())
        .then(json => {
            console.log(json)
            console.log(json.abbreviation)
            //the next line works perfectly, then switches to EST as if it was a default
            console.log(json.datetime)
            console.log('here')

            // let jsonString = json.datetime
            // time = console.log(new Date(jsonString).toLocaleString({ hour12: false }))
            console.log('here')


            //below currently prints JUST the second json, not both. It also prints the long date, not the hour
            document.getElementById('timeDisplay').innerText = (json.datetime).toLocaleString('en-US', { hour12: false })
            var d = json.datetime.toString()
            // var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
            // d.getHours() + ":" + d.getMinutes();
            console.log(d)
            var dt = json.datetime
            console.log(new Date(json.unixtime * 1000).toLocaleTimeString('en-US'))
            // console.log(dt.toU ().split`T`[0])


        })
}

// ('dropdown-item').addEventListener("click", function () {
    
// })

var est = document.getElementById('inputEST')

// inputEST.onclick () => {
//     var cityEST = "America/New_York"
//     timezone(cityEST)

// }

// inputPST.onclick () {
//     var cityPST = "America/Los_Angeles"
//     timezone(cityPST)
// }

estFunction = (city) => {


    // var timezoneInput = document.getElementById("input").value
    // timezone(timezoneInput);

    // var e = document.getElementById("dropdown-menu");
    // var value = e.value;
    // console.log(value)
    var cityEST = "America/New_York"
    timezone(cityEST)
    // console.log(timezone("America/New_York"))
    
}

// cstFunction = (city) => {
//     timezone("America/New_York")
//     console.log(timezone("America/New_York"))
    
// }

pstFunction = (city) => {
    var cityPST = "America/Los_Angeles"
    timezone(cityPST)
    
}

jpFunction = (city) => {
    timezone("Asia/Tokyo") 
    return city;   
}

// eurFunction = (city) => {
//     timezone("America/New_York")
//     console.log(timezone("America/New_York"))
    
// }
// estFunction();
pstFunction();

