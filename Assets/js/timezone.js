

// import localizedFormat from 'dayjs/plugin/localizedFormat';


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


            let jsonString = json.datetime
            time = console.log(new Date(jsonString).toLocaleString('en-US', { hour12: false }))


            //below currently prints JUST the second json, not both. It also prints the long date, not the hour
            document.getElementById('timeDisplay').innerText = new Date(jsonString).toLocaleString('en-US', { hour12: false })
        })
}



var est = document.getElementById('inputEST')



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

// pstFunction = (city) => {
//     var cityPST = "America/Los_Angeles"
//     timezone(cityPST)
//     console.log(cityPST)

// }

// jpFunction = (city) => {
//     timezone("Asia/Tokyo") 
//     return city.format();   
// }


// eurFunction = (city) => {
//     timezone("America/New_York")
//     console.log(timezone("America/New_York"))
    
// }

