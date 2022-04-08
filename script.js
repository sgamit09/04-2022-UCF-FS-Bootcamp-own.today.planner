// Display today's day and date
var today = moment();
var todayDate = today.format('dddd, MMM Do YYYY');
console.log(todayDate);
$("#current").text(todayDate);


$(".saveBtn").on("click", function () {
console.log(this);
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");

//set items in local storage.
localStorage.setItem(time, text);
})

//load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


$(document).ready(function () {
  let hour = moment();
  let currentHour = hour.format("HH");
  console.log(currentHour)

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockHour);

    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
    })
  });

