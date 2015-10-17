$(function() {

  var stopInput = parseInt(prompt("What number would you like to ping-pong up to?"));

  for (var index = 1; index <= stopInput; index ++) {
    if (index % 15 === 0) {
      $("ul.output").append("<li>ping-pong</li>");
    }
    else if (index % 3 === 0) {
      $("ul.output").append("<li>ping</li>");
    }
    else if (index % 5 === 0) {
      $("ul.output").append("<li>pong</li>");
    }
    else {
      $("ul.output").append("<li>" + index + "</li>");
    }
  }
});

// To tell if one number is divisible by another number, use the % operator. For example, if a variable called number is divisible by 7, then number % 7 returns 0.
