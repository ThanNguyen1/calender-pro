var taskInputNine = document.querySelector('#taskInputNine');
var taskInputTen = document.querySelector('#taskInputTen');
var taskInputEleven = document.querySelector('#taskInputEleven');
var taskInputTwelve = document.querySelector('#taskInputTwelve');
var taskInputOne = document.querySelector('#taskInputOne');
var taskInputTwo = document.querySelector('#taskInputTwo');
var taskInputThree = document.querySelector('#taskInputThree');
var taskInputFour = document.querySelector('#taskInputFour');
var taskInputFive = document.querySelector('#taskInputFive');


//shows today's date at the top of the calendar
var date = document.querySelector('#currentDay');
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//creates timeblocks
$('.container')

//tracks current time
moment().locale();

// create user object from inputs
var tasks = {
    taskInput: taskInputNine.value.trim()
};

// set new submission to local storage
localStorage.setItem("tasks", JSON.stringify(tasks));

console.log(tasks);