var currentDay = moment().format("dddd, MMMM Do YYYY h:mm:ss a");
$("#currentDay").html(currentDay);

var timeBlock = $(".time-block");

timeBlock.each(function () {
    var currentTime = moment().format("H");
    console.log(currentTime);
    var blockTime = $(this).data('time');
    console.log(blockTime);
    var presentColor = $(this).siblings("textarea");
   

    if (blockTime < currentTime) {
        presentColor.css('background-color', 'lightgrey');
    }
    else if (blockTime > currentTime) {
        presentColor.css('background-color', 'lightgreen');
    }
    else {
        presentColor.css('background-color', 'lightcoral');
    }
})

$(document).ready(function () {
    for (i = 0; i < 12; i++) {
        var hour = i.toString();
        $("#" + hour).text(JSON.parse(localStorage.getItem(hour)));
    }
})

$(".save-btn").on("click", function () {

    var currentValue = $(this).siblings("textarea").val()
    var id = $(this).siblings("textarea").attr("id")
    localStorage.setItem(id, JSON.stringify(currentValue))

})