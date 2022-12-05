// Constant and Variable Declaration.
const first = 1;
const second = 5;
const third = 12;
const fourth = 19;
const fifth = 26;
var today = dayjs().format('D');

const firebaseConfig = {
    apiKey: "AIzaSyDJhuHYMR82SyUqzVSaUusd5-bkX3O2lBA",
    authDomain: "carrot-project-48376.firebaseapp.com",
    databaseURL: "https://carrot-project-48376-default-rtdb.firebaseio.com",
    projectId: "carrot-project-48376",
    storageBucket: "carrot-project-48376.appspot.com",
    messagingSenderId: "984637850330",
    appId: "1:984637850330:web:6ac6b98de67f5cdbcd9be3",
    measurementId: "G-TY6PHL9QTL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Shorthand for $(document).ready(function ()).
$(function () {
    // Creates the calendar header
    var calendarHeader = $("<div>");
    calendarHeader.attr("id", "calendar-header");
    calendarHeader.addClass("card-header");
    calendarHeader.text(dayjs().format('MMMM'));    // Displays the current month.

    // Creates the calendar body.
    var calendarBody = $("<div>");
    calendarBody.attr("id", "calendar-body");
    calendarBody.addClass("card-body");

    // Creates the calendar body table - calendar grid.
    var tableEl = $("<table>");
    tableEl.addClass("table table-striped-columns");

    // Creates the table header - week days.
    var tableHead = $("<thead>");
    tableHead.attr("id", "week-day");

    // Loop to create a th element for each day of the week and display it.
    for (day = 0; day < 7; day++) {
        var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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

    // Calls the functions to create the date containers.
    renderWeek1();
    renderWeek2();
    renderWeek3();
    renderWeek4();
    renderWeek5();
    // renderEvents();


    // Added event listener to the date container.
    $(".td-date").click(function (event) {
        var target = $(event.target);
        if (target.is("button")) { // Conditional statement to ensure that the function will only be executed if the button is clicked.
            var dateId = $(this).find("input").attr("id"); // Gets the date.
            var eventId = $(this).find("input").val(); // Gets the user input.
            if (eventId !== "") { // Conditional statement to ensure that it will only be stored on click if the textarea is not empty.
                var rabbit = $("<span>");
                rabbit.html("&#128007");
                $(this).find("button").append(rabbit); // Adds a rabbit next to the carrot onclick.

                // Add events to database.
                firebase.database().ref("/date-event/" + dateId).push({
                    date: dateId,
                    events: eventId,
                    purpose: "Add event to calendar"
                });
            }
        }
    }
    )
}
);

function renderWeek1() {
    // Loop to create a td element for each date of the first row and display it.
    for (date = first; date < 8; date++) {
        var day = $("<td>");
        day.attr('id', `${date}`);
        day.addClass('td-date');
        // TODO: Add function to check the week day
        var valueId = parseInt(day.attr('id')); // ParseInt converts a string to an integer.
        var dayId = valueId - 3; // The dayId that will be displayed needs to start at 1, but the date value is 4 (Thursday).

        // Since December starts on a Thursday, the first 3 containers must be empty.
        if (valueId >= 4) {
            day.text(dayId);

            // Creates inputs.
            var inputEl = $('<input>');
            inputEl.attr("id", dayId);
            inputEl.attr('type', 'text');
            inputEl.addClass("input")

            // Creates button to store the user's input.
            var buttonEl = $("<button>");
            buttonEl.attr('id', 'save-button');
            buttonEl.attr('type', 'submit');
            buttonEl.html("&#129365"); // Carrot's unicode.

            day.append(inputEl);
            day.append(buttonEl);
        }

        $("#week-1").append(day); // Appends first week row content.
    }
}

function renderWeek2() {
    // Date = first date of the second row. 
    for (date = second; date < third; date++) {
        var day = $("<td>");
        day.attr('id', `${date}`);
        day.addClass('td-date');
        // TODO: Add function to check the week day
        day.text(`${date}`);

        var inputEl = $('<input>');
        inputEl.attr("id", date);
        inputEl.attr('type', 'text');
        inputEl.addClass("input")

        var buttonEl = $("<button>");
        buttonEl.attr('id', 'save-button');
        buttonEl.attr('type', 'submit');
        buttonEl.html("&#129365");


        day.append(inputEl);
        day.append(buttonEl);
        $("#week-2").append(day);
    }
}

function renderWeek3() {
    for (date = third; date < fourth; date++) {
        var day = $("<td>");
        day.attr('id', `${date}`);
        day.addClass('td-date');
        // TODO: Add function to check the week day
        day.text(`${date}`);

        var inputEl = $('<input>');
        inputEl.attr("id", date);
        inputEl.attr('type', 'text');
        inputEl.addClass("input")

        var buttonEl = $("<button>");
        buttonEl.attr('id', 'save-button');
        buttonEl.attr('type', 'submit');
        buttonEl.html("&#129365");


        day.append(inputEl);
        day.append(buttonEl);
        $("#week-3").append(day);
    }
}

function renderWeek4() {
    for (date = fourth; date < fifth; date++) {
        var day = $("<td>");
        day.attr('id', `${date}`);
        day.addClass('td-date');
        // TODO: Add function to check the week day
        day.text(`${date}`);

        var inputEl = $('<input>');
        inputEl.attr("id", date);
        inputEl.attr('type', 'text');
        inputEl.addClass("input")

        var buttonEl = $("<button>");
        buttonEl.attr('id', 'save-button');
        buttonEl.attr('type', 'submit');
        buttonEl.html("&#129365");


        day.append(inputEl);
        day.append(buttonEl);
        $("#week-4").append(day);
    }
}

function renderWeek5() {
    // Added 33 so that we have all the grid's containers.
    for (date = fifth; date < 33; date++) {
        var day = $("<td>");
        day.attr('id', `${date}`);
        day.addClass('td-date');

        // TODO: Add function to check the week day
        // If it is the last container (32), it only creates an empty string.
        if (date < 32) {
            day.text(`${date}`);

            var inputEl = $('<input>');
            inputEl.attr("id", date);
            inputEl.attr('type', 'text');
            inputEl.addClass("input")

            var buttonEl = $("<button>");
            buttonEl.attr('id', 'save-button');
            buttonEl.attr('type', 'submit');
            buttonEl.html("&#129365");


            day.append(inputEl);
            day.append(buttonEl);
        }

        $("#week-5").append(day);
    }
};





// TODO: Function to display the storage whenever the user loads the page.
// function renderEvents() {
//     var dateId = $(".input").attr("id"); // Gets the user input.
//     dateId.each(firebase.database().ref("/date-event/" + dateId).on("value", function (snapshot) {
//         var data = snapshot.val();
//         console.log(data);
//         var eventVal = data["events"];
//         console.log(eventVal);
//     }))
// };
