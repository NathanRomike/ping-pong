$(function() {
  var endInput = parseInt(prompt("What number would you like to ping-pong up to?"));
  for (var index = 1; index <= endInput; index ++) {
    if (index % 15 === 0) {
      $("ul").append("<li>ping-pong</li>");
    }
    else if (index % 3 === 0) {
      $("ul").append("<li>ping</li>");
    }
    else if (index % 5 === 0) {
      $("ul").append("<li>pong</li>");
    }
    else {
      $("ul").append("<li>" + index + "</li>");
    }
  }
});
