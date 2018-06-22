var emptyArray = []

var numberEntered = function(number) {
  if (number % 15 === 0){
    emptyArray.push("pingpong");
    $(".result").text(emptyArray);
  } else if (number % 5 === 0) {
    emptyArray.push("pong");
    $(".result").text(emptyArray);
  } else if (number % 3 === 0) {
    emptyArray.push("ping");
    $(".result").text(emptyArray)
  } else {
    emptyArray.push(number);
    $(".result").text(emptyArray);
  }
};


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











}
