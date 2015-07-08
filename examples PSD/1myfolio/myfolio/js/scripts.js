$(function () {
    $(".modal-button").on({
        click: function () {
            $("#overlay").fadeIn("slow");
            $("#contactform-container").fadeIn("slow");
            $("body").css("overflow","hidden");
        }
    });
    $("#close-button, #overlay").on({
        click: function(){
            $("#overlay").fadeOut(200);
            $("#contactform-container").fadeOut(200);
            $("body").css("overflow","visible");
        }
    });

});