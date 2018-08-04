$(".btn1").click(function () {
    $(".submitP").text("");

})


$(".inp1").focus(function () {
    $(".inp1").val("");
})

$(".inp1").blur(function () {
    $(".inp1").val("Write Here");
})

$(".inp1").keyup(function () {
    $(".submitP").text($(".inp1").val()) 
})


$(".toggler").click(function () {
    $(".submitP").toggle();
})


$(".animBtn").click(function () {
    
    $(".submitP").animate({ left: "+=40px" }, 40);
    
    $(".submitP").animate({ left: "-=40px" }, 40);
    $(".submitP").animate({ left: "+=40px" }, 40);
    $(".submitP").animate({ left: "-=40px" }, 40);
    $(".submitP").animate({ left: "+=40px" }, 40);
    $(".submitP").animate({ left: "-=40px" }, 40);

});
$("#left").click(function () {
    $(".submitP").animate({ left: "-=25px" },300);
})

$("#right").click(function () {
    $(".submitP").animate({ left: "+=25px" },300);
})
$("#down").click(function () {
    $(".submitP").animate({ bottom: "-=25px" },300);
})
$(".up").click(function () {
    $(".submitP").animate({ bottom: "+=25px" },300);
})

