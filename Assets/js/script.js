// Constant and Variable Declaration.
const first = 1;
const second = 5;
const third = 12;
const fourth = 19;
const fifth = 26;
var today = dayjs().format('D');
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentMonth = dayjs().format('MMMM');

//LARISSA'S DATABASE CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyDJhuHYMR82SyUqzVSaUusd5-bkX3O2lBA",
    authDomain: "carrot-project-48376.firebaseapp.com",
    databaseURL: "https://carrot-project-48376-default-rtdb.firebaseio.com",
    projectId: "carrot-project-48376",
    storageBucket: "carrot-project-48376.appspot.com",
    messagingSenderId: "984637850330",
    appId: "1:984637850330:web:6ac6b98de67f5cdbcd9be3",
    measurementId: "G-TY6PHL9QTL",
    cors: false
};

// Bryan's Database Config
// const firebaseConfig = {
//     apiKey: "AIzaSyD-tLX0LyCbkwyIIoCMZLkuHFfG1NeDWyc",
//     authDomain: "carrot-calendar-8c002.firebaseapp.com",
//     databaseURL: "https://carrot-calendar-8c002-default-rtdb.firebaseio.com",
//     projectId: "carrot-calendar-8c002",
//     storageBucket: "carrot-calendar-8c002.appspot.com",
//     messagingSenderId: "527726326014",
//     appId: "1:527726326014:web:5814bc2f647cc92443b5af",
//     measurementId: "G-CLP0HKCDK1",
//     cors: false
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Shorthand for $(document).ready(function ()).
$(function () {
    // Creates the calendar header
    var calendarHeader = $("<div>");
    calendarHeader.attr("id", "calendar-header");
    calendarHeader.addClass("card-header fs-1");
    calendarHeader.text(currentMonth);    // Displays the current month.

    // Creates the calendar body.
    var calendarBody = $("<div>");
    calendarBody.attr("id", "calendar-body");
    calendarBody.addClass("card-body");

    // Creates the calendar body table - calendar grid.
    var tableEl = $("<table>");
    tableEl.addClass("table");

    // Creates the table header - week days.
    var tableHead = $("<thead>");
    tableHead.attr("id", "week-day");

    // Loop to create a th element for each day of the week and display it.
    for (day = 0; day < 7; day++) {
        var weekDay = $("<th>");
        weekDay.attr("scope", "col");
        weekDay.text(`${weekDays[day]}`);

        tableHead.append(weekDay); // Appends the th elements to the table header.
    }

    // Creates the table row - week rows.
    var tableBody = $("<tbody>");
    tableBody.attr("id", "week-row");

    // Loop to create a th element for each week and display it.
    for (row = 1; row < 6; row++) {
        var weekRows = $("<tr>");
        weekRows.attr("id", 'week-' + `${row}`);

        tableBody.append(weekRows); // Appends the tr elements to the table body.
    }

    tableEl.append(tableHead); // Appends the table header to the table element.
    tableEl.append(tableBody); // Appends the table body to the table element.
    calendarBody.append(tableEl); // Appends the table element to the calendar body.

    var calendar = $("#calendar") // Get element by id.
    calendar.append(calendarHeader); // Appends the calendar header to the calendar container.
    calendar.append(calendarBody); // Appends the calendar body to the calendar container.

    renderEvents();
    renderUserName();
    weatherData();

})

// Function to display the storage whenever the user loads the page.
function renderEvents() {
    var dateDetail = $('#date').val();

    firebase.database().ref('/' + dateDetail).on("value", function (snapshot) {
        var data = snapshot.val();

        // Calls the functions to create the date containers.
        renderWeek1(data);
        renderWeek2(data);
        renderWeek3(data);
        renderWeek4(data);
        renderWeek5(data);

        /// Added event listener to the date container.
        $(".td-date").click(function (event) {
            var target = $(event.target);
            if (target.is("button")) { // Conditional statement to ensure that the function will only be executed if the button is clicked.
                $(".time-widget").css("display", "block");
                $("#calendar").css("display", "none");
                $("#sidebar").css("display", "none");
            }
        });
    })
};

function storeEvent() {
    var eventDetail = $('#text').val();
    var dateDetail = $('#date').val();
    var timeDetail = $('#time').val();
    var submitBtn = $('#submit');
    var backBtn = $('#back');

    if (eventDetail && dateDetail && timeDetail !== "") { // Conditional statement to ensure that it will only be stored on click if the text, date and time are not empty.
        submitBtn.css("display", "none");
        backBtn.html('Back &#129365&#128007'); // Adds a rabbit next to the carrot onclick.

        // Add events to database.
        firebase.database().ref('/' + dateDetail).push({
            time: timeDetail,
            events: eventDetail,
            purpose: "Add event to calendar"
        });
    }
};

function renderWeek1(data) {
    // Loop to create a td element for each date of the first row and display it.
    for (date = first; date < 8; date++) {
        var day = $("<td>");
        day.attr('id', `${date}`);
        day.addClass('td-date');
        var valueId = parseInt(day.attr('id'));
        var dayId = valueId - 4;

        // Since December starts on a Thursday, the first 4 containers must be empty.
        if (valueId < 5) {
            day.attr('id', '0');
            day.text("");
        }

        else if (dayId < 10) {
            day.attr('id', dayId);
            dayId = '0' + dayId;

            day.text(dayId);

            // Creates textareas.
            var textareaEl = $('<textarea>');
            var fullDateId = '2022-12-' + dayId;
            textareaEl.attr("id", '2022-12-' + dayId);
            textareaEl.attr('disabled', 'disabled'); // Disable so that it displays only the database items.
            textareaEl.addClass("textarea");

            try {
                console.log(data[fullDateId]);
                var dateObj = data[fullDateId];
                for (key in dateObj) {
                    var eventInput = dateObj[key].events;
                    var timeInput = dateObj[key].time;
                    textareaEl.text(eventInput);

                    var todayDate = dayjs().format('D');

                    if (dayId === todayDate) {
                        var pTag = $('<p>');
                        pTag.addClass('fs-6');
                        pTag.text(timeInput + ': ' + eventInput);
                        $('#todays-events').append(pTag);
                    }
                }
            }
            catch (err) {
                console.log(err)
            }

            // Creates button to store the user's input.
            var buttonEl = $("<button>");
            buttonEl.attr('id', 'save-button');
            buttonEl.attr('type', 'submit');
            buttonEl.html("&#129365"); // Carrot's unicode.

            day.append(textareaEl);
            day.append(buttonEl);
        }

        $("#week-1").append(day); // Appends first week row content.
    }
};

function renderWeek2(data) {
    // Date = first date of the second row. 
    for (date = second; date < third; date++) {
        var day = $("<td>");
        day.attr('id', `${date}`);
        day.addClass('td-date');

        if (date < 10) {
            date = '0' + date;
        }

        day.text(`${date}`);

        // Creates textareas.
        var textareaEl = $('<textarea>');
        var fullDateId = '2022-12-' + date;
        textareaEl.attr("id", '2022-12-' + date);
        textareaEl.attr('disabled', 'disabled');
        textareaEl.addClass("textarea");

        try {
            console.log(data[fullDateId]);
            var dateObj = data[fullDateId];
            for (key in dateObj) {
                var eventInput = dateObj[key].events;
                var timeInput = dateObj[key].time;
                textareaEl.text(eventInput);

                var dayId = (day.attr('id'));
                var todayDate = dayjs().format('D');

                if (dayId === todayDate) {
                    var pTag = $('<p>');
                    pTag.addClass('fs-6');
                    pTag.text(timeInput + ': ' + eventInput);
                    $('#todays-events').append(pTag);
                }
            }
        }
        catch (err) {
            console.log(err)
        }

        var buttonEl = $("<button>");
        buttonEl.attr('id', 'save-button');
        buttonEl.attr('type', 'submit');
        buttonEl.html("&#129365");

        day.append(textareaEl);
        day.append(buttonEl);

        $("#week-2").append(day);
    }
};

function renderWeek3(data) {
    for (date = third; date < fourth; date++) {
        var day = $("<td>");
        day.attr('id', `${date}`);
        day.addClass('td-date');
        // TODO: Add function to check the week day
        day.text(`${date}`);

        // Creates textareas.
        var textareaEl = $('<textarea>');
        var fullDateId = '2022-12-' + date;
        textareaEl.attr("id", '2022-12-' + date);
        textareaEl.attr('disabled', 'disabled');
        textareaEl.addClass("textarea");

        try {
            console.log(data[fullDateId]);
            var dateObj = data[fullDateId];
            for (key in dateObj) {
                var eventInput = dateObj[key].events;
                var timeInput = dateObj[key].time;
                textareaEl.text(eventInput);

                var dayId = (day.attr('id'));
                var todayDate = dayjs().format('D');

                if (dayId === todayDate) {
                    var pTag = $('<p>');
                    pTag.addClass('fs-6');
                    pTag.text(timeInput + ': ' + eventInput);
                    $('#todays-events').append(pTag);
                }
            }
        }
        catch (err) {
            console.log(err)
        }

        var buttonEl = $("<button>");
        buttonEl.attr('id', 'save-button');
        buttonEl.attr('type', 'submit');
        buttonEl.html("&#129365");

        day.append(textareaEl);
        day.append(buttonEl);
        $("#week-3").append(day);
    }
};

function renderWeek4(data) {
    for (date = fourth; date < fifth; date++) {
        var day = $("<td>");
        day.attr('id', `${date}`);
        day.addClass('td-date');
        // TODO: Add function to check the week day
        day.text(`${date}`);

        // Creates textareas.
        var textareaEl = $('<textarea>');
        var fullDateId = '2022-12-' + date;
        textareaEl.attr("id", '2022-12-' + date);
        textareaEl.attr('disabled', 'disabled');
        textareaEl.addClass("textarea");

        try {
            console.log(data[fullDateId]);
            var dateObj = data[fullDateId];
            for (key in dateObj) {
                var eventInput = dateObj[key].events;
                var timeInput = dateObj[key].time;
                textareaEl.text(eventInput);

                var dayId = (day.attr('id'));
                var todayDate = dayjs().format('D');

                if (dayId === todayDate) {
                    var pTag = $('<p>');
                    pTag.addClass('fs-6');
                    pTag.text(timeInput + ': ' + eventInput);
                    $('#todays-events').append(pTag);
                }
            }
        }
        catch (err) {
            console.log(err)
        }

        var buttonEl = $("<button>");
        buttonEl.attr('id', 'save-button');
        buttonEl.attr('type', 'submit');
        buttonEl.html("&#129365");

        day.append(textareaEl);
        day.append(buttonEl);
        $("#week-4").append(day);
    }
};

function renderWeek5(data) {
    // Added 33 so that we have all the grid's containers.
    for (date = fifth; date < 33; date++) {
        var day = $("<td>");
        day.attr('id', `${date}`);
        day.addClass('td-date');

        // If it is the last container (32), it only creates an empty string.
        if (date < 32) {
            day.text(`${date}`);

            // Creates textareas.
            var textareaEl = $('<textarea>');
            var fullDateId = '2022-12-' + date;
            textareaEl.attr("id", '2022-12-' + date);
            textareaEl.attr('disabled', 'disabled');
            textareaEl.addClass("textarea");

            try {
                console.log(data[fullDateId]);
                var dateObj = data[fullDateId];
                for (key in dateObj) {
                    var eventInput = dateObj[key].events;
                    var timeInput = dateObj[key].time;
                    textareaEl.text(eventInput);

                    var dayId = (day.attr('id'));
                    var todayDate = dayjs().format('D');

                    if (dayId === todayDate) {
                        var pTag = $('<p>');
                        pTag.addClass('fs-6');
                        pTag.text(timeInput + ': ' + eventInput);
                        $('#todays-events').append(pTag);
                    }
                }
            }
            catch (err) {
                console.log(err)
            }

            var buttonEl = $("<button>");
            buttonEl.attr('id', 'save-button');
            buttonEl.attr('type', 'submit');
            buttonEl.html("&#129365");

            day.append(textareaEl);
            day.append(buttonEl);
        }
        $("#week-5").append(day);
    }
};

function login() {
    $(".login-widget").css("display", "block");
    $("#calendar").css("display", "none");
    $("#sidebar").css("display", "none");
}

// If there is no saved username, then renders an empty array.
var userStorage = JSON.parse(localStorage.getItem("username")) || [];

function storeUserInfo() {
    var userName = $("#username");
    var userCity = $("#city");
    var submitBtn2 = $("#submit2");
    var backBtn2 = $("#back2");

    if (userName && userCity !== "") { // Conditional statement to ensure that it will only be stored on click if the text, date and time are not empty.
        submitBtn2.css("display", "none");
        backBtn2.html('Back &#129365&#128007');

        var userData = {
            username: $("#username").val(),
            city: $("#city").val()
        }
        // Saves the data in the highscore array.
        userStorage.push(userData);

        // Need to convert the object to a string before storing it, or it'll return [object, object].
        localStorage.setItem("username", JSON.stringify(userStorage));

        renderUserName();
        weatherData();
    }
}

function renderUserName() {
    var welcomeTag = $("<p>");
    welcomeTag.attr('id', 'hi');
    welcomeTag.html("Hi &#128007 ");
    $("#user-area").append(welcomeTag);

    var userId = $("<p>");
    userId.attr('id', 'user');
    userId.text(userStorage[0].username);
    $("#user-area").append(userId);

    var pTagCity = $("<p>");
    pTagCity.text("From " + userStorage[0].city);
    $("#user-area").append(pTagCity);
}

// Timezone
function timezone(timezoneCity) {

    var timezoneApi = "http://worldtimeapi.org/api/timezone/" + timezoneCity;

    fetch(timezoneApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            var timezoneData = data.datetime;
            var timezoneDate = timezoneData.slice(11, 16);
            var timezoneCode = data.abbreviation;
            $('#timezone-display').html(timezoneDate + " - " + timezoneCode);
        }
        );
}

function renderEST() {
    let timezoneCity = "America/New_York";
    timezone(timezoneCity);
}

function renderCST() {
    let timezoneCity = "America/Chicago";
    timezone(timezoneCity);
}

function renderPST() {
    let timezoneCity = "America/Los_Angeles";
    timezone(timezoneCity);
}

function renderJP() {
    let timezoneCity = "Asia/Tokyo";
    timezone(timezoneCity);
}

function renderEU() {
    let timezoneCity = "Europe/London";
    timezone(timezoneCity);
}

// Weather
var apiKey = "1621a5fb00df3e233c5aa1c741011fd3";
var weatherCity = userStorage[0].city;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherCity + "&units=imperial&appid=" + apiKey;

function weatherData() {
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            console.log(weatherData);
            renderCurrWeather(weatherData);
        })
}

function renderCurrWeather(weatherData) {
    var weather = weatherData.weather[0];
    var mainInfo = weatherData.main;

    var weatherIconEl = $("<img>");
    weatherIconEl.attr('id', 'weather-icon');
    weatherIconEl.attr('alt', 'weather icon');
    $("#curr-weather").append(weatherIconEl);

    var icon = weather.icon;
    var iconURL = "https://openweathermap.org/img/w/" + icon + ".png";
    var weatherIcon = $('#weather-icon');
    weatherIcon.attr("src", iconURL);

    var description = $("#description");
    description.html(weather.main);

    var temperature = $("#temperature");
    temperature.text(mainInfo.temp + "°F");

    var feelsLike = $("#feels-like");
    feelsLike.text(mainInfo.feels_like + "°F");

    var humidity = $("#humidity");
    humidity.text(mainInfo.humidity + "\%");
}