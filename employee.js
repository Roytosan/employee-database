var config = {
    apiKey: "AIzaSyDnuZuFb2IS9K7sGSQK-1oc1vQ5AyMgUR0",
    authDomain: "test-388d3.firebaseapp.com",
    databaseURL: "https://test-388d3.firebaseio.com",
    projectId: "test-388d3",
    storageBucket: "test-388d3.appspot.com",
    messagingSenderId: "558184448162"
  };

  firebase.initializeApp(config);

  var dataRef = firebase.database();

var employeeName = "";
var role = "";
var startDate = 0;
var monthlyRate = 0;


 // Capture Button Click
 $("#submit-data").on("click", function(event) {
    event.preventDefault();

// YOUR TASK!!!
// Code in the logic for storing and retrieving the most recent user.
// Don't forget to provide initial data to your Firebase database.
    emplyeeName = $("#employee-name").val().trim();
    role = $("#employee-role").val().trim();
    startDate = $("#start-date").val().trim();
    monthlyRate = $("#monthly-rate").val().trim();

    dataRef.ref().push({

        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });

     // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
     dataRef.ref().on("child_added", function(childSnapshot) {

        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().employeeName);
        console.log(childSnapshot.val().role);
        console.log(childSnapshot.val().startDate);
        console.log(childSnapshot.val().monthlyRate);
        console.log(childSnapshot.val().joinDate);
  
    });