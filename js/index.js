$("#first").click(function () {
    
    if ($(this).html() == "+") {
        $(this).html("-");
        $("#body1").height(250);
    } else {
        $(this).html("+");
        $("#body1").height(0);
    }
});
$("#second").click(function () {
    
    if ($(this).html() == "+") {
        $(this).html("-");
        $("#body2").height(250);
    } else {
        $(this).html("+");
        $("#body2").height(0);
    }
});
$("#third").click(function () {
    
    if ($(this).html() == "+") {
        $(this).html("-");
        $("#body3").height(250);
    } else {
        $(this).html("+");
        $("#body3").height(0);
    }
});