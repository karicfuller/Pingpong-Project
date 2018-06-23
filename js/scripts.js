var emptyArray = []

function getResponse(number) {
    if (number % 15 === 0) {
        return "pingpong";
    }
    else if (number % 5 === 0) {
        return "pong";
    }
    else if (number % 3 === 0) {
        return "ping";
    }
    else {
        return number.toString();
    }
}


$(document).ready(function() {
  $form("pingpong").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#pingpong").val();
    var countTo = parseInt($(""))
    var result = numberEntered(number);

    if (!result) {
      $("#numberList").text("li");
    } else {
      $("#numberList").text("");
    }

    $(".result").show();
  });
});
