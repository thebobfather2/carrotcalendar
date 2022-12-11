

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

            let datestring = (JSON.stringify(json.datetime))

            var fixeddate = datestring


            //below currently prints JUST the second json, not both. It also prints the long date, not the hour
            document.getElementById('timeDisplay').innerText = fixeddate
        })
}


//this defaults to EST but it will be replaced when button is clicked
dateFunction = (city) => {
    timezone("America/New_York")
    console.log(timezone("America/New_York"))
}

function renderest () {
    timezone("America/New_York")
    console.log(timezone("America/New_York"))
}

function rendercst () {
    timezone("America/Chicago")
    console.log(timezone("America/Chicago"))
    
}

function renderjp () {
    timezone("Asia/Tokyo")
    console.log(timezone("Asia/Tokyo"))    
}

function renderpst () {
    timezone("America/Los_Angeles")
    console.log(timezone("America/Los_Angeles"))
}

function rendereu () {
    timezone("Europe/London")
    console.log(timezone("Europe/London"))
}

dateFunction();


