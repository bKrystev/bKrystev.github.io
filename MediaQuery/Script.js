let myWindow;

function smallScreen() {
   
    myWindow = window.open("html3.html",
        "popup", "width=250px,height=450px,left=200,top=80")
}
function landscape() {
    myWindow.close();
    myWindow = window.open("html3.html",
        "popup", "width=450px,height=250px,left=200,top=90,")
}
function tabletScreen() {
    myWindow.close();
    myWindow = window.open("html3.html",
        "popup", "width=700,height=400,left=200,top=100")
   
}

$(".small").click(smallScreen);
$(".landscape").click(landscape);
$(".tablet").click(tabletScreen);