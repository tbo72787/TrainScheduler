var firebaseConfig = {
  apiKey: "AIzaSyCPllSLxQulBQpf6FZmy-sFDDbW8hsVMqU",
  authDomain: "train-scheduler-c589a.firebaseapp.com",
  databaseURL: "https://train-scheduler-c589a.firebaseio.com",
  projectId: "train-scheduler-c589a",
  storageBucket: "train-scheduler-c589a.appspot.com",
  messagingSenderId: "650857991913",
  appId: "1:650857991913:web:a65009aba3986d91a72a78",
  measurementId: "G-H69DNV0XWQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#submit-btn").on("click", function(event) {
  event.preventDefault();
console.log("bottun works");
  // Grabs user input
  var trainName = $("#nameInput").val().trim();
  var trainDest = $("#destInput").val().trim();
  var firstTrain = $("#firstInput").val().trim();
  var trainFreq = $("#freqInput").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    dest: trainDest,
    first: firstTrain,
    freq: trainFreq
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.dest);
  console.log(newTrain.first);
  console.log(newTrain.freq);
});