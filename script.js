$(document).ready(function () {

  //adding DOW and Date to top of page

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  //Saving description per hour for set item 

  $("#hour-9.description").val(localStorage.getItem("hour-9"));
  $("#hour-10.description").val(localStorage.getItem("hour-10"));
  $("#hour-11.description").val(localStorage.getItem("hour-11"));
  $("#hour-12.description").val(localStorage.getItem("hour-12"));
  $("#hour-13.description").val(localStorage.getItem("hour-13"));
  $("#hour-14.description").val(localStorage.getItem("hour-14"));
  $("#hour-15.description").val(localStorage.getItem("hour-15"));
  $("#hour-16.description").val(localStorage.getItem("hour-16"));
  $("#hour-17.description").val(localStorage.getItem("hour-17"));

  //Save button event listener
  $(".saveBtn").on("click", function () {

    console.log(this);

    var id = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(id, description);
  });

  function saveDescription (d) {
    if (!localStorage.getItem(d)) {
        return "empty";
    }
    return localStorage.getItem(d);
  }

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
      console.log(IdHour, currentHour)
    })
  }

  saveDescription();
  colorbars();
});
