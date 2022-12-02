// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD-tLX0LyCbkwyIIoCMZLkuHFfG1NeDWyc",
//   authDomain: "carrot-calendar-8c002.firebaseapp.com",
//   databaseURL: "https://carrot-calendar-8c002-default-rtdb.firebaseio.com",
//   projectId: "carrot-calendar-8c002",
//   storageBucket: "carrot-calendar-8c002.appspot.com",
//   messagingSenderId: "527726326014",
//   appId: "1:527726326014:web:5814bc2f647cc92443b5af",
//   measurementId: "G-CLP0HKCDK1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import firebase from "firebase/app";
import "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  // Check for user status
});

//require firebase for server side storage
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


//See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyD-tLX0LyCbkwyIIoCMZLkuHFfG1NeDWyc",
  authDomain: "carrot-calendar-8c002.firebaseapp.com",
  databaseURL: "https://carrot-calendar-8c002-default-rtdb.firebaseio.com",
  projectId: "carrot-calendar-8c002",
  storageBucket: "carrot-calendar-8c002.appspot.com",
  messagingSenderId: "527726326014",
  appId: "1:527726326014:web:5814bc2f647cc92443b5af",
  measurementId: "G-CLP0HKCDK1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


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
