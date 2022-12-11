

// import localizedFormat from 'dayjs/plugin/localizedFormat';
//fetching the timezone api
const timezone = (city) => {
    var timezoneApi = "http://worldtimeapi.org/api/timezone/" + city 

    fetch(timezoneApi)
        //storing the response, then pulling the datetime to display
        .then(response => response.json())
        .then(json => {
            console.log(json)
            console.log(json.abbreviation)
            console.log(json.datetime)
            //need to somehow shorten the response so it doesn't print the entire return
            //need to build a prompt for users to choose their timezone, then a new function will switch the timezones with interpolation

            let jsonString = json.datetime
            time = console.log(new Date(jsonString).toLocaleString({ hour12: true }))


            //below currently prints JUST the second json, not both. It also prints the long date, not the hour
            document.getElementById('timeDisplay').innerText = new Date(jsonString).toLocaleString({ hour12: true })


        })
}

estFunction = (city) => {
    timezone("America/New_York")
    console.log(timezone("America/New_York"))
    
}

cstFunction = (city) => {
    timezone("America/New_York")
    console.log(timezone("America/New_York"))
    
}

// pstFunction = (city) => {
//     timezone("America/Los_Angeles")
    
// }

// jpFunction = (city) => {
//     timezone("Asia/Tokyo")    
// }

// eurFunction = (city) => {
//     timezone("America/New_York")
//     console.log(timezone("America/New_York"))
    
// }
estFunction();