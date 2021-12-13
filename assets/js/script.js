//shows today's date at the top of the calendar
var date = document.querySelector('#currentDay');
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//creates timeblocks
$('.container')