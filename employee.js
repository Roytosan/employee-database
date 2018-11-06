var config = {
    apiKey: "AIzaSyDnuZuFb2IS9K7sGSQK-1oc1vQ5AyMgUR0",
    authDomain: "test-388d3.firebaseapp.com",
    databaseURL: "https://test-388d3.firebaseio.com",
    projectId: "test-388d3",
    storageBucket: "test-388d3.appspot.com",
    messagingSenderId: "558184448162"
  };

  firebase.initializeApp(config);

  var initialBid = 0;
  var initialBidder = "No one :-(";
  var highPrice = initialBid;
  var highBidder = initialBidder;

var employeeName = "No one";
var role;
var startDate = new Date(1970, 0, 1);
var today = Date();
var oneMonth = 2629800000;
var monthsWorked = document.write(Math.ceil((today.getTime()-startDate.getTime())/(oneMonth))+)
var monthlyRate = 0;
var totalBilled = monthlyRate * monthsWorked;

// Find a <table> element with id="employees":
var table = document.getElementById("employees");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";