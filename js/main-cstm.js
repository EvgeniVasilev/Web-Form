$(document).ready(function() {
    $(".emul-btn").click(function() {
        $(".opt-emul").slideToggle("medium", function() {
            if ($(".opt-emul").css("display") === "none") {
                $(".select-emul").css({
                    "box-shadow": "0 0 0 "
                });
            }
        });
        $(".select-emul").css({
            "box-shadow": "0px 0px 5px blue"
        });
        $(".emul-text-area").slideToggle("medium");
    });
    // sub-one
    $("#sub-one").click(function() {
        $(".emul-select-text").text($("#sub-one").text());
        $(".opt-emul").slideUp("medium", function() {
            if ($(".opt-emul").css("display") === "none") {
                $(".select-emul").css({
                    "box-shadow": "0 0 0 "
                });
            }
            ;
        });
    });
    $("#sub-one").click(function() {
        $(".emul-text-area").slideDown("medium");
    });
    // sub-two
    $("#sub-two").click(function() {
        $(".emul-select-text").text($("#sub-two").text());
        $(".opt-emul").slideUp("medium", function() {
            if ($(".opt-emul").css("display") === "none") {
                $(".select-emul").css({
                    "box-shadow": "0 0 0 "
                });
            }
            ;
        });
    });
    $("#sub-two").click(function() {
        $(".emul-text-area").slideDown("medium");
    });
    // sub-three
    $("#sub-three").click(function() {
        $(".emul-select-text").text($("#sub-three").text());
        $(".opt-emul").slideUp("medium", function() {
            if ($(".opt-emul").css("display") === "none") {
                $(".select-emul").css({
                    "box-shadow": "0 0 0 "
                });
            }
            ;
        });
    });
    $("#sub-three").click(function() {
        $(".emul-text-area").slideDown("medium");
    });
    // sub-four
    $("#sub-four").click(function() {
        $(".emul-select-text").text($("#sub-four").text());
        $(".opt-emul").slideUp("medium", function() {
            if ($(".opt-emul").css("display") === "none") {
                $(".select-emul").css({
                    "box-shadow": "0 0 0 "
                });
            }
            ;
        });
    });
    $("#sub-four").click(function() {
        $(".emul-text-area").slideDown("medium");
    });
    // sub-five
    $("#sub-five").click(function() {
        $(".emul-select-text").text($("#sub-five").text());
        $(".opt-emul").slideUp("medium", function() {
            if ($(".opt-emul").css("display") === "none") {
                $(".select-emul").css({
                    "box-shadow": "0 0 0 "
                });
            }
        });
    });
    $("#sub-five").click(function() {
        $(".emul-text-area").slideDown("medium");
    });
});

