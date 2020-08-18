
$(document).ready(function () {
  $("form#userInput").submit(function (event) {
    let countTo = parseInt($("input#countUpTo").val());
    let countBy = parseInt($("input#countBy").val());
    let thirty = [];

    for (let index = countBy; index <= countTo; index += countBy) {
      thirty.push(index);
      console.log(index);
      console.log(thirty);
    }

    $(".result").text(thirty);
    $("#userArray").show();

    event.preventDefault();

  });
});