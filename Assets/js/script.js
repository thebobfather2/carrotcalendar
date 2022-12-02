// Constant Declaration.
const first = 1;
const second = 5;
const third = 12;
const fourth = 19;
const fifth = 26;


// Will only run once the page DOM is ready for JavaScript code to execute. Shorthand for $(document).ready(function ()).
$(function () {
    // Added code to display the current month in the calendar header.
    $("#calendar-header").text(dayjs().format('MMMM'));

    // Calls all functions so they can be executed.
    renderWeekDays();
    renderWeek1();
    renderWeek2();
    renderWeek3();
    renderWeek4();
    renderWeek5();
}
)

function renderWeekDays() {
    var trContainer = $("<tr>");
    trContainer.addClass('tr-day');

    for (day = 0; day < 7; day++) {
        var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var thContainer = $("<th>");
        thContainer.attr("scope", "col");
        thContainer.text(`${weekDays[day]}`);

        trContainer.append(thContainer);

        $("#week-day").append(trContainer);
    }
}

function renderWeek1() {
    for (date = first; date < 8; date++) {
        var tdContainer = $("<td>");
        tdContainer.attr('id', `${date}`);
        tdContainer.addClass('td-date');
        // TODO: Add function to check the week day
        var valueId = parseInt(tdContainer.attr('id'));

        if (valueId < 4) {
            tdContainer.text("");
        }

        else {
            tdContainer.text(valueId - 3);
            var inputContainer = $('<input>');
            inputContainer.attr('type', 'text');
            inputContainer.addClass("input")

            var buttonEl = $("<button>");
            buttonEl.attr('id', 'saveBtn');
            buttonEl.attr('type', 'button');
            buttonEl.html("&#129365");

            tdContainer.append(inputContainer);
            tdContainer.append(buttonEl);
        }

        $("#week-1").append(tdContainer);
    }
}

function renderWeek2() {
    for (date = second; date < third; date++) {
        var tdContainer = $("<td>");
        tdContainer.attr('id', `${date}`);
        tdContainer.addClass('td-date');
        // TODO: Add function to check the week day
        tdContainer.text(`${date}`);

        var inputContainer = $('<input>');
        inputContainer.attr('type', 'text');
        inputContainer.addClass("input")

        var buttonEl = $("<button>");
        buttonEl.attr('id', 'saveBtn');
        buttonEl.attr('type', 'button');
        buttonEl.html("&#129365");


        tdContainer.append(inputContainer);
        tdContainer.append(buttonEl);
        $("#week-2").append(tdContainer);
    }
}

function renderWeek3() {
    for (date = third; date < fourth; date++) {
        var tdContainer = $("<td>");
        tdContainer.attr('id', `${date}`);
        tdContainer.addClass('td-date');
        // TODO: Add function to check the week day
        tdContainer.text(`${date}`);

        var inputContainer = $('<input>');
        inputContainer.attr('type', 'text');
        inputContainer.addClass("input")

        var buttonEl = $("<button>");
        buttonEl.attr('id', 'saveBtn');
        buttonEl.attr('type', 'button');
        buttonEl.html("&#129365");


        tdContainer.append(inputContainer);
        tdContainer.append(buttonEl);
        $("#week-3").append(tdContainer);
    }
}

function renderWeek4() {
    for (date = fourth; date < fifth; date++) {
        var tdContainer = $("<td>");
        tdContainer.attr('id', `${date}`);
        tdContainer.addClass('td-date');
        // TODO: Add function to check the week day
        tdContainer.text(`${date}`);

        var inputContainer = $('<input>');
        inputContainer.attr('type', 'text');
        inputContainer.addClass("input")

        var buttonEl = $("<button>");
        buttonEl.attr('id', 'saveBtn');
        buttonEl.attr('type', 'button');
        buttonEl.html("&#129365");


        tdContainer.append(inputContainer);
        tdContainer.append(buttonEl);
        $("#week-4").append(tdContainer);
    }
}

function renderWeek5() {
    // Added 33 so that we have all the containers - full grid.
    for (date = fifth; date < 33; date++) {
        // Creates week row.
        var tdContainer = $("<td>");
        tdContainer.attr('id', `${date}`);
        tdContainer.addClass('td-date');
        // TODO: Add function to check the week day
        if (date >= 32) {
            tdContainer.text("");
        }
        else {
            tdContainer.text(`${date}`);

            var inputContainer = $('<input>');
            inputContainer.attr('type', 'text');
            inputContainer.addClass("input")

            var buttonEl = $("<button>");
            buttonEl.attr('id', 'saveBtn');
            buttonEl.attr('type', 'button');
            buttonEl.html("&#129365");


            tdContainer.append(inputContainer);
            tdContainer.append(buttonEl);
        }

        $("#week-5").append(tdContainer);
    }
}

// Added the event listener to the entire week row.
$(".td-date").click(function (event) {
    var target = $(event.target); // Targets the click.
    if (target.is('button')) { // Conditional statement to ensure that the function will only be executed if the button is clicked.
        var dateId = $(this).attr('id'); // Gets the date.
        var eventId = $(this).find(".input").val(); // Gets the user input.
        if (eventId !== "") { // Conditional statement to ensure that it will only be stored on click if the textarea is not empty.
            // TODO: Add server storage.
            localStorage.setItem(dateId, eventId);
        }
    }
})

// TODO: Function to display the storage whenever the user loads the page.
