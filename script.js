$(document).ready(function () {

  //adding DOW and Date to top of page

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  //Saving description per hour for set item 


  //Save button event listener
  $(".saveBtn").on("click", function () {
  
    console.log(this);

    var id = $(this).parent().attr("id");
    var description = ($(this).siblings(".description").val());

    console.log(id, description);

    localStorage.setItem(id, JSON.stringify(description));

  });

  function renderMessage() {
    var h9 = JSON.parse(localStorage.getItem("hour-9"));
    if (h9 !== null) {
      document.querySelector("#h9").value = h9
    }
    var h10 = JSON.parse(localStorage.getItem("hour-10"));
    if (h10 !== null) {
      document.querySelector("#h10").value = h10
    }
    var h11 = JSON.parse(localStorage.getItem("hour-11"));
    if (h11 !== null) {
      document.querySelector("#h11").value = h11
    }
    var h12 = JSON.parse(localStorage.getItem("hour-12"));
    if (h12 !== null) {
      document.querySelector("#h12").value = h12
    }
    var h13 = JSON.parse(localStorage.getItem("hour-13"));
    if (h13 !== null) {
      document.querySelector("#h13").value = h13
    }
    var h14 = JSON.parse(localStorage.getItem("hour-14"));
    if (h14 !== null) {
      document.querySelector("#h14").value = h14
    }
    var h15 = JSON.parse(localStorage.getItem("hour-15"));
    if (h15 !== null) {
      document.querySelector("#h15").value = h15
    }
    var h16 = JSON.parse(localStorage.getItem("hour-16"));
    if (h16 !== null) {
      document.querySelector("#h16").value = h16
    }
    var h17 = JSON.parse(localStorage.getItem("hour-17"));
    if (h17 !== null) {
      document.querySelector("#h17").value = h17
    }
  }
  
 
  

  function colorbars() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var IdHour = $(this).attr("id").substr(5);
      if (IdHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
      else if (IdHour == currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
      console.log(IdHour, currentHour)
    })
  }

  colorbars();
 
  renderMessage();
});
