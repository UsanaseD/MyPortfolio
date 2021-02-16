$(".max_min_button").click(function () {
    
    if ($(this).html() == "+") {
        $(".news_body").height(250);
        $(this).html("-");
    } else {
        $(this).html("+");
        $(".news_body").height(0);
    }
});