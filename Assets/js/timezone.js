const timezoneDiv = document.getElementById('#timezone')
const country = document.getElementById('country')

//fetching the timezone apo
const timezone = () => {
    fetch("http://worldtimeapi.org/api/timezone/America/New_York")
    //storing the response, then pulling the datetime to display
        .then(response => response.json())
        .then(json => {
            console.log(json.datetime)
            //need to somehow shorten the response so it doesn't print the entire return
            //need to build a prompt for users to choose their timezone, then a new function will switch the timezones with interpolation
            // document.querySelector('h3').innerHTML = `${json.datetime}`

        })}
        timezone()