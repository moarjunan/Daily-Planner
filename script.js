$(document).ready(function () {

  //adding DOW and Date to top of page

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  //Saving description per hour for set item 

  $("#hour-9.description").val(localStorage.getItem("hour-9"));
  $("#hour-10.description").val(localStorage.getItem("hour-10"));
  $("#hour-11.description").val(localStorage.getItem("hour-11"));
  $("#hour-12.description").val(localStorage.getItem("hour-12"));
  $("#hour-1.description").val(localStorage.getItem("hour-1"));
  $("#hour-2.description").val(localStorage.getItem("hour-2"));
  $("#hour-3.description").val(localStorage.getItem("hour-3"));
  $("#hour-4.description").val(localStorage.getItem("hour-4"));
  $("#hour-5.description").val(localStorage.getItem("hour-5"));

  //Save button event listener

  $(".saveBtn").on("click", function () {

    console.log(this);

    var id = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(id, description);

  });

  //Function assigning color

  function colorbars() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var IdHour = $(this).attr("id").substr(5);
      if (IdHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (IdHour === currentHour) {
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
  }
  colorbars();
});
