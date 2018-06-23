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


function showResponseArray(responseArray) {
    var liTags = "";
    for (var index = 0; index < responseArray.length; index++) {
        var liTag = "<li>" + responseArray[index] + "</li>";
        liTags += liTag;
    }
    console.log(liTags);
    $("ol#listOfNumbers").html(liTags);
}

$(document).ready(function() {
  $("button").on("click", function(event) {
    event.preventDefault();
    var numberEntered = parseInt($("input#theNumber").val());
    if (isNaN(numberEntered)) {
        alert("Please enter a number");
    }
    else if (numberEntered <= 0) {
        alert("Enter a positive number");
    }
    else {
      var emptyArray = [];
      for (var index = 1; index <= numberEntered; index++) {
        var response = getResponse(index);
        emptyArray.push(response);
      }
      showResponseArray(emptyArray);
    }
  });
});
